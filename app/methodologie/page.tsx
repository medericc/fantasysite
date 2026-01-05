import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Méthodologie First Pick – Intelligence Artificielle & Basket Féminin",
  description:
    "Découvrez la méthodologie First Pick : un modèle d’intelligence artificielle dédié à l’analyse des performances en basket féminin (LFB & LF2).",
}

export default function MethodologiePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
        Méthodologie First Pick
      </h1>

      <section className="space-y-6 text-base md:text-lg">
        <p>
          Les classements et distinctions <strong>First Pick</strong> reposent
          sur une méthodologie d’analyse avancée combinant données statistiques
          et intelligence artificielle. L’objectif est d’évaluer la performance
          réelle des joueuses de basket féminin en LFB et LF2.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white pt-6">
          Données analysées
        </h2>

        <p>
          Le modèle prend en compte de nombreux indicateurs : production
          offensive, efficacité, impact défensif, régularité, influence sur le
          résultat et contribution collective. Chaque donnée est replacée dans
          le contexte du match et de la saison.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white pt-6">
          Intelligence artificielle et pondération
        </h2>

        <p>
          L’intelligence artificielle First Pick applique des pondérations
          dynamiques selon le rôle, le temps de jeu et l’importance des
          rencontres. Cela permet d’éviter les biais liés au simple volume
          statistique.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white pt-6">
          Classements et mises à jour
        </h2>

        <p>
          Les classements sont mis à jour régulièrement tout au long de la
          saison. Les notes évoluent en fonction des performances récentes afin
          de refléter la dynamique réelle des joueuses.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white pt-6">
          Limites et transparence
        </h2>

        <p>
          Aucun modèle ne prétend à l’exactitude absolue. First Pick assume ses
          limites et vise avant tout une lecture cohérente, reproductible et
          honnête des performances.
        </p>
      </section>
    </main>
  )
}
