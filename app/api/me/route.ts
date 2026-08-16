export const runtime = "nodejs";
import { NextResponse } from 'next/server';
import { getCurrentUserId } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const userId = await getCurrentUserId();

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  // Récupérer le rôle principal à partir de user.roles
  let role = null;
  if (Array.isArray(user?.roles)) {
    role = user.roles[0]; // Exemple : "admin"
  }

  return NextResponse.json({ userId, role });
}
