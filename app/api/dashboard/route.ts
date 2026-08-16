// app/api/dashboard/route.ts
export const runtime = "nodejs";
import { NextResponse } from 'next/server';
import { getCurrentUserId } from '@/lib/auth'; // à adapter selon ton auth
import { getTotalRanking, getWeeklyRanking } from '@/lib/ranking_total';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const userId = await getCurrentUserId(); // Clerk ou session
  console.log("User ID récupéré :", userId);
 const dbUser = await prisma.user.findUnique({
    where: { id: userId },
    select: { pseudo: true },
  });
  const leagueId = 1; // LFB uniquement
  const leagueName = 'LFB';

  const latestWeek = await prisma.week.findFirst({
    where: {
      league_id: leagueId,
      player_rate: { some: {} },
    },
    orderBy: { id: 'desc' },
  });

  const fallbackWeek = await prisma.week.findFirst({
    where: { league_id: leagueId },
    orderBy: { id: 'asc' },
  });

  const weekToUse = latestWeek ?? fallbackWeek;
  if (!weekToUse) {
    return NextResponse.json([]);
  }

  const weekRanking = await getWeeklyRanking(leagueId, weekToUse.id);
  const totalRanking = await getTotalRanking(leagueId);

  const weekIndex = weekRanking.findIndex(u => u.userId === userId) + 1;
  const totalIndex = totalRanking.findIndex(u => u.userId === userId) + 1;

  const weekPoints = weekRanking.find(u => u.userId === userId)?.points ?? 0;
  const totalPoints = totalRanking.find(u => u.userId === userId)?.points ?? 0;

  return NextResponse.json([{
    league: leagueName,
    week: weekToUse.name,
    weekIndex,
    weekPoints,
    totalIndex,
    totalPoints,
     username: dbUser?.pseudo || null, 
  }]);
}
