export const runtime = "nodejs";
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const leagueId = 1; // LFB uniquement

  const weeks = await prisma.week.findMany({
    where: { league_id: leagueId },
    select: { id: true, name: true },
    orderBy: { id: 'asc' },
  });

  return NextResponse.json(weeks); // [{ id: 1, name: 'Semaine 1' }, ...]
}
