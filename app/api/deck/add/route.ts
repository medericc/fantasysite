// app/api/deck/add/route.ts
export const runtime = "nodejs";
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';

export async function POST(request: Request) {
  const userId = await getCurrentUserId();
  const { playerId, weekId } = await request.json();

  const parsedWeekId = parseInt(weekId, 10);

  if (!userId || !playerId || isNaN(parsedWeekId)) {
    return NextResponse.json({ error: 'Missing or invalid parameters' }, { status: 400 });
  }

  // 🔒 Vérifier si la semaine a déjà commencé
  const weekLimit = await prisma.game.aggregate({
    where: { week_id: parsedWeekId },
    _min: { match_date: true },
  });

  const limitDate = weekLimit._min.match_date;
  if (limitDate && new Date() >= limitDate) {
    return NextResponse.json(
      { error: 'Désolé, votre deck est bloqué.' },
      { status: 403 }
    );
  }

  // Vérifier si déjà choisie dans les 5 dernières semaines
  const blocked = await prisma.choice.findFirst({
    where: {
      user_id: userId,
      player_id: playerId,
      week: {
        id: {
          gte: parsedWeekId - 5,
          lt: parsedWeekId,
        },
      },
    },
  });

  if (blocked) {
    return NextResponse.json({ error: 'Player is blocked for 5 weeks.' }, { status: 403 });
  }

  // Vérifier si déjà 5 joueuses choisies cette semaine
  const count = await prisma.choice.count({
    where: {
      user_id: userId,
      week_id: parsedWeekId,
    },
  });

  if (count >= 5) {
    return NextResponse.json({ error: 'Maximum 5 players per week' }, { status: 400 });
  }

  // Créer le choix
  const choice = await prisma.choice.create({
    data: {
      user_id: userId,
      player_id: playerId,
      week_id: parsedWeekId,
    },
    include: {
      player: true,
    },
  });

  return NextResponse.json(choice);
}
