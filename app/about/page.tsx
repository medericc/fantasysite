import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "À propos de First Pick – Analyse & Classements Basket Féminin",
  description:
    "First Pick est un média indépendant dédié au basket féminin. Classements LFB & LF2, analyses avancées et évaluations générées par intelligence artificielle.",
  keywords: [
    "basket féminin",
    "LFB",
    "LF2",
    "classement basket",
    "statistiques basket",
    "intelligence artificielle sport",
    "First Pick",
  ],
}

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
        À propos de First Pick
      </h1>

      <section className="space-y-6 text-base md:text-lg">
        <p>
          <strong>First Pick</strong> est un média indépendant spécialisé dans
          l’analyse du basket féminin français. Notre mission est de proposer
          une lecture moderne, objective et transparente des performances
          individuelles et collectives en LFB et LF2.
        </p>

        <p>
          À travers des classements exclusifs, des distinctions All-Stars et
          des équipes de l’année, First Pick met en lumière les joueuses les plus
          performantes en s’appuyant sur les données plutôt que sur la simple
          subjectivité.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white pt-6">
          Pourquoi First Pick ?
        </h2>

        <p>
          First Pick est né pour valoriser la performance réelle, comparer les saisons et offrir un
          outil de référence aux passionnés et acteurs du basket.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white pt-6">
          Une méthodologie basée sur l’intelligence artificielle
        </h2>

        <p>
          Les notes First Pick sont générées à partir d’un modèle
          d’intelligence artificielle développé en interne. Celui-ci analyse
          de multiples indicateurs : statistiques individuelles, régularité,
          impact sur le résultat, physionomie des rencontres et influence
          collective.
        </p>

        <p>
          Contrairement aux évaluations classiques, chaque performance est
          replacée dans son contexte. Les classements sont mis à jour régulièrement au fil
          de la saison.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white pt-6">
          Indépendance et transparence
        </h2>

        <p>
          First Pick est un projet indépendant. Les classements et analyses ne
          sont influencés par aucun club, agent ou partenaire. Notre objectif
          est de proposer une information fiable, compréhensible et accessible
          à tous.
        </p>
      </section>
    </main>
  )
}
