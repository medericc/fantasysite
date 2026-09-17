import type { Metadata } from "next"
import {
  Cookie,
  ShieldCheck,
  BarChart3,
  Settings,
  Info,
  Mail,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Politique relative aux cookies – First Pick",
  description:
    "Politique relative aux cookies et traceurs utilisés sur First Pick : fonctionnement, mesure d'audience, consentement et gestion des préférences.",
  alternates: {
    canonical: "https://www.lfbfantasy.com/politique-cookies",
  },
}

export default function PolitiqueCookiesPage() {
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
                <Cookie className="w-8 h-8 text-white" />
              </div>
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900 mb-4">
              Politique relative aux cookies
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300">
              Informations sur les cookies et autres traceurs utilisés par
              First Pick
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
                <Cookie className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Qu'est-ce qu'un cookie ?
              </h2>
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Un cookie est un fichier ou un traceur pouvant être enregistré
              ou lu sur le terminal d'un utilisateur lorsqu'il consulte un
              site internet. Les cookies peuvent être utilisés pour assurer
              le fonctionnement d'un service, mémoriser certains choix ou
              mesurer l'utilisation d'un site.
            </p>
          </section>

          {/* Cookies nécessaires */}
          <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Cookies nécessaires au fonctionnement
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Certains éléments techniques peuvent être nécessaires au
                fonctionnement, à la sécurité ou à la mémorisation des choix
                effectués sur le site.
              </p>

              <p>
                Les traceurs strictement nécessaires à la fourniture d'un
                service expressément demandé par l'utilisateur peuvent être
                exemptés de consentement dans les conditions prévues par la
                réglementation applicable.
              </p>

              <p>
                La CNIL rappelle notamment que les traceurs nécessaires au
                fonctionnement d'un service et certains traceurs conservant
                le choix de l'utilisateur peuvent relever de cette exemption.
              </p>
            </div>
          </section>

          {/* Analytics */}
          <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Mesure d'audience
              </h2>
            </div>

            <div className="space-y-5 text-slate-700 dark:text-slate-300">

              <div>
                <h3 className="text-lg font-bold mb-2">
                  Google Analytics
                </h3>

                <p>
                  First Pick peut utiliser Google Analytics afin de mesurer
                  l'audience du site et de comprendre la manière dont les
                  visiteurs utilisent ses différentes pages.
                </p>

                <p className="mt-3">
                  Lorsque les traceurs utilisés nécessitent un consentement,
                  ils ne doivent être activés qu'après le choix positif de
                  l'utilisateur.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">
                  Vercel Analytics
                </h3>

                <p>
                  First Pick utilise également Vercel Analytics pour obtenir
                  des statistiques relatives aux visites et aux performances
                  du site. Vercel indique que son Web Analytics est conçu pour
                  produire des données agrégées et ne pas utiliser de cookies
                  tiers pour suivre les visiteurs entre différents sites.
                </p>
              </div>

            </div>
          </section>

          {/* Consentement */}
          <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900">
                <Settings className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Votre consentement
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Lorsque le consentement est requis, celui-ci doit être recueilli
                avant le dépôt ou la lecture des traceurs concernés.
              </p>

              <p>
                Vous devez pouvoir accepter ou refuser les finalités concernées
                et revenir ultérieurement sur votre choix.
              </p>

              <p>
                Le refus des traceurs non nécessaires ne doit pas empêcher
                l'accès aux fonctionnalités ordinaires du site lorsque leur
                utilisation n'est pas indispensable.
              </p>
            </div>
          </section>

          {/* Gestion */}
          <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900">
                <Info className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Gestion des cookies
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Vous pouvez également configurer votre navigateur afin de
                bloquer ou supprimer certains cookies. Cette configuration
                peut toutefois avoir une incidence sur le fonctionnement de
                certains sites ou services.
              </p>

              <p>
                Lorsque First Pick met à disposition un mécanisme permettant
                de modifier les préférences de consentement, celui-ci doit
                rester accessible afin de permettre à l'utilisateur de revenir
                sur son choix.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900">
                <Mail className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Contact
              </h2>
            </div>

            <p className="text-slate-700 dark:text-slate-300">
              Pour toute question concernant l'utilisation des cookies et
              autres traceurs sur First Pick, vous pouvez contacter :
            </p>

            <p className="mt-4 text-slate-800 dark:text-slate-200 font-semibold">
              <a
                href="mailto:firstpick46@gmail.com"
                className="underline hover:no-underline"
              >
                firstpick46@gmail.com
              </a>
            </p>
          </section>

          {/* Mise à jour */}
          <section className="text-center">
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
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