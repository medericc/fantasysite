// app/page.tsx
export const runtime = "nodejs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import ClientPage from "../../../components/ClientPage";

export default async function Home() {
  const user = await currentUser();

  // Redirection si pas connecté
  if (!user || !user.id || !user.emailAddresses[0]?.emailAddress) {
    redirect("/fantasy/sign-in");
  }

  const clerkId = user.id;
  const email = user.emailAddresses[0].emailAddress;

  let dbUser = await prisma.user.findUnique({ where: { clerk_id: clerkId } });

  // Si l'user n'existe pas encore, crée-le
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        email,
        clerk_id: clerkId,
        roles: '["user"]',   // ✅ string

        password: '',
        pseudo: null,  // Assure-toi d’avoir ce champ dans ton modèle Prisma
      },
    });
  }
 
  return <ClientPage pseudo={dbUser.pseudo} />;
}
