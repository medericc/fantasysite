"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";
export default function TermsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header identique */}
      <Header />

      {/* Contenu */}
      <main className="flex-1 w-full max-w-3xl mx-auto p-4 space-y-6 mt-5">
        {/* Bouton retour */}
        <div>
         <Button
  variant="ghost"
  size="sm"
  onClick={() => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/fantasy/dashboard");
    }
  }}
  className="flex items-center gap-2 shadow-md"
>
  <ArrowLeft className="h-4 w-4" />
  Retour
</Button>

        </div>

        {/* Bloc CGU */}
        <section className="p-2 rounded-lg space-y-6">
          <div>
            <h1 className="text-3xl font-bold">
              Mentions légales
            </h1>
            <p className="text-sm text-gray-500">
              Dernière mise à jour : 4 juin 2025
            </p>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-gray-700">
            <p>
            Conformément à l’article 6 de la loi n° 2004-575 du 21 juin 2004.
            </p>

            <div>
              <h2 className="text-lg font-semibold mb-1">1. Éditeur du site</h2>
               <p>
          Le site <strong>First Pick Fantasy League</strong> est édité par un particulier à titre non professionnel.
        </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">2. Hébergement</h2>
             <p>
  Le site est hébergé par :<br />
  <strong>Vercel Inc.</strong><br />
  440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
  Site :
  <Button
    asChild
    className=" mt-1 ml-2 gap-2 bg-gray-900 text-white hover:bg-gray-700"
  >
    <a
      href="https://vercel.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
    >
      <ExternalLink className="h-4 w-4" />
      vercel.com
    </a>
  </Button>
</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">3. Propriété intellectuelle</h2>
             <p>
          Tous les contenus du site (textes, images, graphismes, logo) sont la propriété exclusive de First Pick,
          sauf mentions contraires. Toute reproduction est interdite sans autorisation.
        </p>
            </div>

          

            <div>
              <h2 className="text-lg font-semibold mb-1">
                4. Cookies</h2>
            <p>
          Le site peut utiliser des cookies pour des mesures d’audience anonymes. Vous pouvez les refuser via le bandeau de consentement.
        </p>
            </div>

           
          </div>
        </section>
      </main>

      {/* Footer identique */}
      <Footer />
    </div>
  );
}
