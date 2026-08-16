// app/api/deck/remove/route.ts
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

  // Supprimer le choix
  const deleted = await prisma.choice.deleteMany({
    where: {
      user_id: userId,
      player_id: playerId,
      week_id: parsedWeekId,
    },
  });

  return NextResponse.json({ deleted: deleted.count });
}
