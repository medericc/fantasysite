// app/api/team/id-by-name/route.ts
export const runtime = "nodejs";
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');

  const team = await prisma.team.findFirst({
    where: { name: name || undefined },
    select: { id: true },
  });

  if (!team) return NextResponse.json({ error: 'Team not found' }, { status: 404 });

  return NextResponse.json(team);
}
