export const runtime = "nodejs";
import { NextResponse } from 'next/server';
import { upsertPlayerRate } from '@/lib/update';
import { getCurrentUserId } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const userId = await getCurrentUserId();
  const user = await prisma.user.findUnique({ where: { id: userId } });

  // Vérifie que le user est admin
  if (!Array.isArray(user?.roles) || !user.roles.includes('admin')) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
  }

  const { playerId, weekId, newRate } = await req.json();

if (typeof playerId !== 'number' || typeof weekId !== 'number' || typeof newRate !== 'number') {
  return NextResponse.json({ error: "Paramètres invalides" }, { status: 400 });
}
  try {
    await upsertPlayerRate(playerId, weekId, newRate);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
  if (err instanceof Error) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
  return NextResponse.json({ error: "Erreur inconnue" }, { status: 400 });
}

}