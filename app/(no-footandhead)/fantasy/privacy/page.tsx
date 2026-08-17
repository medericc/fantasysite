"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

function EmailButton({ email }: { email: string }) {
  return (
    <Button
      onClick={() => (window.location.href = `mailto:${email}`)}
      className="flex items-center gap-2 text-center bg-yellow-700 text-gray-100"
    >
      <Mail className="h-4 w-4" />
      {email}
    </Button>
  );
}

export default function PrivacyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 w-full max-w-3xl mx-auto p-4 space-y-6 mt-5">
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

        <section className="p-2 rounded-lg space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Politique de Confidentialité</h1>
            <p className="text-sm text-gray-500">
              Dernière mise à jour : 4 juin 2025
            </p>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-gray-700">
            <p>
              Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos données personnelles
              dans le cadre de notre fantasy league dédiée au basket féminin (LFB & LF2), proposée par{" "}
              <strong>First Pick</strong>.
            </p>

            <div>
              <h2 className="text-lg font-semibold">1. Responsable du traitement</h2>
              <p>
                Cette application est opérée par <strong>First Pick</strong>. Pour toute question concernant vos données :
              </p>
             <div className="flex justify-center mt-2">
    <EmailButton email="firstpick46@gmail.com" />
  </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold">2. Données collectées</h2>
              <ul className="list-disc ml-6">
                <li>Adresse e-mail et pseudo via Clerk</li>
                <li>Activité dans le jeu : points, choix de joueuses, classements</li>
                <li>Identifiants techniques (Clerk ID, cookie/session ID)</li>
                <li>Données de navigation via Google Analytics (anonymisées)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold">3. Finalité de la collecte</h2>
              <ul className="list-disc ml-6">
                <li>Créer et gérer les comptes utilisateurs</li>
                <li>Afficher les scores, classements et badges</li>
                <li>Améliorer l’expérience utilisateur</li>
                <li>Assurer la sécurité et la stabilité du service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold">4. Services tiers</h2>
              <p>
                Nous utilisons <strong>Clerk</strong> pour l’authentification sécurisée. Leur politique est disponible ici :{" "}
                 <div className="flex justify-center">
  <Button
    asChild
    className="gap-2 mt-2 justify-center bg-yellow-700 text-gray-100 hover:bg-yellow-700"
  >
    <a
      href="https://clerk.com/privacy"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <ExternalLink className="h-4 w-4" />
      clerk.com/privacy
    </a>
  </Button>
</div>

              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">5. Conservation des données</h2>
              <p>
                Les données sont conservées tant que votre compte est actif.
              </p>
             
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">6. Vos droits (RGPD)</h2>
              <ul className="list-disc ml-6">
                <li>Droit d’accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l’effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d’opposition</li>
              </ul>
             
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">7. Sécurité</h2>
              <p>
                Nous appliquons des mesures techniques et organisationnelles pour sécuriser vos données personnelles.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">8. Cookies & statistiques</h2>
              <p>
                Nous utilisons Google Analytics pour analyser le trafic. Aucun suivi sans consentement.
              </p>
              <h3 className="font-semibold mt-2">Cookies utilisés :</h3>
              <ul className="list-disc ml-6">
                <li>Cookies fonctionnels (sessions via Clerk)</li>
                <li>Cookies de mesure d’audience (Google Analytics)</li>
                <li>Cookies de préférences (langue, thème)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">9. Modifications</h2>
              <p>
                Cette politique peut être mise à jour. Vous serez notifié(e) en cas de changement important.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
