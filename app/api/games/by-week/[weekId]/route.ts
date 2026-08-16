// app/api/games/by-week/[weekId]/route.ts
export const runtime = "nodejs";
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ weekId: string }> } // ✅ params est un Promise
) {
  const { weekId } = await params;  // ✅ on attend params
  const weekIdNum = Number(weekId);

  if (isNaN(weekIdNum)) {
    return NextResponse.json({ error: 'Invalid weekId' }, { status: 400 });
  }

  const games = await prisma.game.findMany({
    where: { week_id: weekIdNum },
    include: {
      team_home: true,
      team_away: true,
    },
  });

  return NextResponse.json(games);
}
