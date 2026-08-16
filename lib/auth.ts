// lib/auth.ts
export const runtime = "nodejs";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from '@/lib/prisma';

export async function getCurrentUserId(): Promise<number> {
  const user = await currentUser();
  if (!user || !user.id) throw new Error("Unauthorized");

  let dbUser = await prisma.user.findUnique({
    where: { clerk_id: user.id },
  });

  // S’il n’existe pas encore, le créer directement ici (comme tu fais dans page.tsx)
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        email: user.emailAddresses[0]?.emailAddress ?? "",
        clerk_id: user.id,
        roles: "user",
        password: "",
        pseudo: null,
      },
    });
  }

  return dbUser.id;
}
