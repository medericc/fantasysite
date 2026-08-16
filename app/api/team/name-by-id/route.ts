export const runtime = "nodejs";
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get('id');
  const id = idParam ? parseInt(idParam, 10) : null;

  if (!id) {
    return NextResponse.json({ error: 'Missing or invalid id' }, { status: 400 });
  }

  const team = await prisma.team.findUnique({
    where: { id },
    select: { name: true },
  });

  if (!team) {
    return NextResponse.json({ error: 'Team not found' }, { status: 404 });
  }

  return NextResponse.json(team);
}
