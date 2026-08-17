// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Connexion - First Pick",
  description: "Connectez-vous pour gérer votre équipe First Pick.",
};

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-100">
      <div className="flex flex-col items-center space-y-8">
        <div className="flex items-center gap-3 ">
        {/* Logo + titre */}
        <Image
          src="/lololom.png" // Mets ton logo ici
          alt="First Pick Logo"
          width={49}
          height={49}
        />
        <h1 className="text-3xl font-bold text-neutral-900">First Pick</h1>
</div>
        {/* Formulaire Clerk */}
        <SignIn
          appearance={{
            layout: {
              socialButtonsPlacement: "bottom",
              socialButtonsVariant: "blockButton",
            },
            elements: {
              header: "hidden",
              rootBox: "shadow-2xl rounded-2xl ",
              formButtonPrimary:
                "bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-lg transition-all",
              socialButtonsBlockButton:
                "border border-neutral-300 hover:bg-neutral-200 transition-colors rounded-lg",
            headerTitle: "text-2xl font-bold text-yellow-400",
            headerSubtitle: "text-neutral-400",
            
              footerActionLink: "text-yellow-500 hover:text-yellow-400",
              formFieldInput:
                "bg-neutral-100 border border-neutral-300 text-black placeholder-neutral-500 focus:border-yellow-400 rounded-lg",
            },
          }}
        />
      </div>
    </div>
  );
}
