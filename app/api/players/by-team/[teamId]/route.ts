// app/api/players/by-team/[teamId]/route.ts
export const runtime = "nodejs";
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { NextRequest } from 'next/server';
import { getCurrentUserId } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ teamId: string }> }
) {
  const userId = await getCurrentUserId();
   const { teamId } = await params;
    const teamIdNum = Number(teamId);
  const url = new URL(request.url);
 
  const currentWeek = Number(url.searchParams.get('weekId'));

  console.log('[API] teamId:', teamId, 'userId:', userId, 'weekId:', currentWeek);

  if (!userId || !currentWeek || isNaN(teamIdNum)) {
    return NextResponse.json(
      { error: 'userId, weekId, and teamId must be valid numbers' },
      { status: 400 }
    );
  }

  const players = await prisma.player.findMany({
    where: { team_id: teamIdNum },
  });

  console.log('[API] Players fetched:', players.length);

  const lockedPlayers = await prisma.choice.findMany({
    where: {
      user_id: userId,
      week_id: { lt: currentWeek },
    },
    select: {
      player_id: true,
    },
    distinct: ['player_id'],
  });

  const lockedIds = lockedPlayers.map(p => p.player_id);

  const playersWithLock = players.map(player => ({
    ...player,
    isLocked: lockedIds.includes(player.id),
  }));

  return NextResponse.json(playersWithLock);
}
