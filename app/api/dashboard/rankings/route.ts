// app/api/dashboard/rankings/route.ts
export const runtime = "nodejs";
import { NextResponse } from 'next/server';
import { getTotalRanking, getWeeklyRanking } from '@/lib/ranking_total';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const leagueName = 'LFB';
  const leagueId = 1;

  // Toutes les semaines avec des stats dans cette ligue
  const weeks = await prisma.week.findMany({
    where: {
      league_id: leagueId,
      player_rate: { some: {} },
    },
    orderBy: { id: 'asc' },
  });

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
const weekly: Record<string, any[]> = {};

  for (const week of weeks) {
    const ranking = await getWeeklyRanking(leagueId, week.id);
    weekly[week.name] = ranking.map((r, index) => ({
      username: r.pseudo,
      week: week.name,
      weekIndex: index + 1,
      weekPoints: r.points,
      totalIndex: 0,
      totalPoints: 0,
    }));
  }

  const total = await getTotalRanking(leagueId);
  const totalFormatted = total.map((r, index) => ({
    username: r.pseudo,
    week: '',
    weekIndex: 0,
    weekPoints: 0,
    totalIndex: index + 1,
    totalPoints: r.points,
  }));

  const result = {
    [leagueName]: {
      weekly,
      total: totalFormatted,
    },
  };

  return NextResponse.json(result);
}
