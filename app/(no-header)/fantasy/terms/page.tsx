"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

function EmailButton({ email }: { email: string }) {
  return (
    <Button
      onClick={() => (window.location.href = `mailto:${email}`)}
        className="flex items-center justify-center gap-2 bg-yellow-700 text-gray-100"
    >
      <Mail className="h-4 w-4" />
      {email}
    </Button>
  );
}

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
            onClick={() => router.back()}
            className="flex items-center gap-2 shadow-md"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Button>
        </div>

        {/* Bloc CGU */}
        <section className="p-2 rounded-lg space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">
              Conditions Générales d’Utilisation (CGU)
            </h1>
            <p className="text-sm text-gray-500">
              Dernière mise à jour : 4 juin 2025
            </p>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-gray-700">
            <p>
              Les présentes Conditions Générales d’Utilisation (CGU) régissent
              l’utilisation de la plateforme Fantasy League proposée par{" "}
              <strong>First Pick</strong>.
            </p>

            <div>
              <h2 className="text-lg font-semibold">1. Objet</h2>
              <p>
                Le service permet aux utilisateurs de participer à un jeu de
                fantasy basket basé sur les performances réelles des joueuses
                des ligues LFB et LF2.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">2. Accès au service</h2>
              <p>
                L’accès au service est gratuit. L’utilisateur doit créer un
                compte via Clerk et fournir une adresse e-mail valide.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">3. Règles de conduite</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Ne pas usurper l’identité d’autrui</li>
                <li>Respecter les autres utilisateurs</li>
                <li>
                  Ne pas tenter de tricher ou manipuler le jeu
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                4. Propriété intellectuelle
              </h2>
              <p>
                Le contenu du site (textes, logos, éléments graphiques) est
                protégé par les lois en vigueur sur la propriété intellectuelle.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                5. Limitation de responsabilité
              </h2>
              <p>
                First Pick ne peut être tenu responsable des interruptions ou
                erreurs liées au fonctionnement du service.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">6. Suppression de compte</h2>
              <p>
                L’utilisateur peut demander la suppression de son compte à tout
                moment par e-mail à :{" "}

                <div className="flex justify-center mt-2">
                <EmailButton email="firstpick46@gmail.com" /></div>
                .
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">7. Loi applicable</h2>
              <p>
                Les présentes CGU sont soumises au droit français.
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
