// app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-100">
      <div className="flex flex-col items-center space-y-8">
        {/* Logo + titre */}
        <div className="flex items-center gap-3">
          <Image
            src="/lololom.png" // Mets ton logo ici
            alt="First Pick Logo"
            width={49}
            height={49}
          />
          <h1 className="text-3xl font-bold text-neutral-900">First Pick</h1>
        </div>

        {/* Formulaire Clerk */}
        <SignUp
          forceRedirectUrl="/fantasy"
  signInFallbackRedirectUrl="/fantasy"
          appearance={{
            layout: {
              socialButtonsPlacement: "bottom",
              socialButtonsVariant: "blockButton",
            },
            elements: {
              header: "hidden", // masque le header par défaut
              rootBox: "shadow-2xl rounded-2xl",
              formButtonPrimary:
                "bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-lg transition-all",
              socialButtonsBlockButton:
                "border border-neutral-300 hover:bg-neutral-200 transition-colors rounded-lg",
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
