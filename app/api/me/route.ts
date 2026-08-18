export const runtime = "nodejs";
import { NextResponse } from 'next/server';
import { getCurrentUserId } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const userId = await getCurrentUserId();

 const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  let role = null;
  if (user?.roles) {
    try {
      // Tente de parser la string en JSON (si c'est stocké comme '["admin"]')
      const parsedRoles = JSON.parse(user.roles);
      if (Array.isArray(parsedRoles)) {
        role = parsedRoles[0]; // Récupère le premier élément
      } else {
        role = parsedRoles;
      }
    } catch (e) {
      // Si JSON.parse échoue, c'est que c'est une string simple (ex: "admin")
      role = user.roles;
    }
  }

  return NextResponse.json({ userId, role });
}
