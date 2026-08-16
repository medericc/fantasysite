// app/api/week/status/route.ts
export const runtime = "nodejs";
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const weekId = parseInt(searchParams.get('weekId') || '', 10);
  if (isNaN(weekId)) {
    return NextResponse.json({ error: 'Invalid weekId' }, { status: 400 });
  }

  const weekLimit = await prisma.game.aggregate({
    where: { week_id: weekId },
    _min: { match_date: true },
  });

  return NextResponse.json({
    startDate: weekLimit._min.match_date || null
  });
}
