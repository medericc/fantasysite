export const runtime = "nodejs";
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ weekId: string }> } // <- params est maintenant un Promise
) {
  const userId = await getCurrentUserId();

  const { weekId } = await params;           // <- attendre params
  const weekIdNum = Number(weekId);

  console.log("🔍 API /deck - userId:", userId, "weekId reçu:", weekIdNum);

  if (!userId || isNaN(weekIdNum)) {
    return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
  }

  const choices = await prisma.choice.findMany({
    where: {
      user_id: userId,
      week_id: weekIdNum,
    },
    include: {
      player: {
        include: {
          player_rate: {
            where: { week_id: weekIdNum },
            select: { rate: true },
          },
        },
      },
    },
  });

  return NextResponse.json(choices);
}
