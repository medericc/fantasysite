import type { Metadata } from "next"
import {
  Shield,
  Database,
  Lock,
  Mail,
  UserCheck,
  Server,
  FileText,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Politique de confidentialité – First Pick",
  description:
    "Politique de confidentialité du site First Pick : données collectées, finalités, conservation, droits des utilisateurs et protection des données personnelles.",
  alternates: {
    canonical: "https://www.lfbfantasy.com/politique-confidentialite",
  },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/5 via-transparent to-slate-700/5 pointer-events-none" />

        <div className="container relative mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">

            <Link
              href="/"
              aria-label="Retour à l'accueil First Pick"
              className="inline-block relative z-10 transition-transform duration-200 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900 mb-4">
              Politique de confidentialité
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300">
              Protection et traitement des données personnelles sur First Pick
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Introduction */}
          <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900">
                <FileText className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Introduction
              </h2>
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              First Pick accorde une importance particulière à la protection
              des données personnelles de ses visiteurs. Cette politique
              explique quelles données peuvent être collectées lorsque vous
              utilisez le site, dans quelles finalités elles sont utilisées,
              pendant combien de temps elles peuvent être conservées et quels
              sont vos droits.
            </p>
          </section>

          {/* Responsable */}
          <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900">
                <UserCheck className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Responsable du traitement
              </h2>
            </div>

            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                <strong>Site :</strong> First Pick
              </p>
              <p>
                <strong>Activité :</strong> média indépendant consacré au
                basket féminin et à l'analyse sportive.
              </p>
              <p>
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:firstpick46@gmail.com"
                  className="underline hover:no-underline"
                >
                  firstpick46@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Données */}
          <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900">
                <Database className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Données susceptibles d'être collectées
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Selon votre utilisation du site, certaines informations
                techniques peuvent être traitées, notamment :
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>adresse IP ou informations techniques de connexion ;</li>
                <li>type d'appareil et navigateur utilisé ;</li>
                <li>pages consultées et informations de navigation ;</li>
                <li>date et heure des visites ;</li>
                <li>
                  données statistiques relatives à l'utilisation du site ;
                </li>
                <li>
                  informations que vous transmettez volontairement lorsque
                  vous contactez First Pick.
                </li>
              </ul>

              <p>
                First Pick ne demande pas aux visiteurs de fournir de données
                sensibles pour utiliser les fonctionnalités ordinaires du
                site.
              </p>
            </div>
          </section>

          {/* Finalités */}
          <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900">
                <Shield className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Finalités des traitements
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>Les données peuvent notamment être utilisées afin de :</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>assurer le fonctionnement et la sécurité du site ;</li>
                <li>mesurer et comprendre la fréquentation du site ;</li>
                <li>améliorer les performances et l'ergonomie du site ;</li>
                <li>
                  répondre aux demandes adressées à First Pick ;
                </li>
                <li>
                  détecter d'éventuels problèmes techniques ou de sécurité.
                </li>
              </ul>
            </div>
          </section>

          {/* Analytics */}
          <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900">
                <Server className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Services d'analyse et d'hébergement
              </h2>
            </div>

            <div className="space-y-5 text-slate-700 dark:text-slate-300">

              <div>
                <h3 className="font-bold text-lg mb-2">
                  Google Analytics
                </h3>

                <p>
                  First Pick peut utiliser Google Analytics afin d'obtenir des
                  statistiques relatives à la fréquentation et à l'utilisation
                  du site. Lorsque le consentement est requis, ces fonctionnalités
                  analytiques sont activées conformément aux choix exprimés par
                  l'utilisateur.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">
                  Vercel Analytics
                </h3>

                <p>
                  First Pick utilise également Vercel Analytics pour mesurer
                  l'utilisation et les performances du site. Vercel indique que
                  son service Web Analytics est conçu pour fournir des données
                  agrégées et ne pas identifier personnellement les visiteurs
                  ou suivre leur navigation sur différents sites.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">
                  Hébergement
                </h3>

                <p>
                  Le site est hébergé par Vercel Inc. Les données techniques
                  nécessaires au fonctionnement et à la sécurité du service
                  peuvent être traitées par l'hébergeur.
                </p>
              </div>

            </div>
          </section>

         

          {/* Droits */}
          <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900">
                <UserCheck className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Vos droits
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Conformément à la réglementation applicable en matière de
                protection des données, vous pouvez notamment disposer d'un
                droit d'accès, de rectification, d'effacement, de limitation
                du traitement, d'opposition et, lorsque les conditions sont
                réunies, de portabilité de vos données.
              </p>

              <p>
                Lorsque le traitement repose sur votre consentement, vous
                pouvez retirer celui-ci à tout moment.
              </p>

              <p>
                Pour exercer vos droits ou obtenir des informations sur le
                traitement de vos données, vous pouvez contacter First Pick :
              </p>

              <p>
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:firstpick46@gmail.com"
                  className="underline hover:no-underline"
                >
                  firstpick46@gmail.com
                </a>
              </p>

              <p>
                Vous pouvez également, lorsque vous estimez que vos droits ne
                sont pas respectés, adresser une réclamation à la CNIL.
              </p>
            </div>
          </section>

          {/* Mise à jour */}
          <section className="text-center">
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
              <Mail className="w-6 h-6 mx-auto mb-3 text-slate-700 dark:text-slate-300" />

              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Dernière mise à jour
              </h2>

              <p className="text-slate-600 dark:text-slate-400">
                17 septembre 2026
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}