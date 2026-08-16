// app/api/player_rate/save/route.ts
export const runtime = "nodejs";
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // et PAS depuis generated


export async function POST(request: Request) {
  const { playerId, weekId, rate } = await request.json();

  const updated = await prisma.player_rate.upsert({
    where: {
      player_id_week_id: {
        player_id: playerId,
        week_id: weekId,
      },
    },
    update: { rate },
    create: { player_id: playerId, week_id: weekId, rate },
  });

  return NextResponse.json(updated);
}
