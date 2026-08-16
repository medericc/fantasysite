export const runtime = "nodejs";
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';

export async function GET(request: Request) {
  const userId = await getCurrentUserId();
  const { searchParams } = new URL(request.url);
  const weekId = Number(searchParams.get('weekId'));

  if (!userId || isNaN(weekId)) {
    return NextResponse.json({ error: 'Missing or invalid parameters' }, { status: 400 });
  }

  // Trouver les joueuses bloquées pour CETTE semaine
  const blockedChoices = await prisma.choice.findMany({
    where: {
      user_id: userId,
      week: {
        id: {
          gte: weekId - 5,
          lt: weekId,
        },
      },
    },
    select: { player_id: true },
  });

  const blockedIds = blockedChoices.map(c => c.player_id);

  return NextResponse.json({ blocked: blockedIds });
}