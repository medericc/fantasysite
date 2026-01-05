import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions légales – First Pick",
  description:
    "Mentions légales du site First Pick, média indépendant dédié au basket féminin.",
}

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
        Mentions légales
      </h1>

      <section className="space-y-6 text-base">
        <p>
          <strong>Nom du site :</strong> First Pick
        </p>
        <p>
          <strong>Responsable de publication :</strong> First Pick
        </p>
        <p>
          <strong>Email :</strong> contact@lfbfantasy.com
        </p>

        <p>
          <strong>Hébergement :</strong> Vercel Inc.
        </p>

        <p>
          Le site First Pick est un média indépendant à vocation informative.
          Les données publiées sont fournies à titre indicatif et analytique.
        </p>

        <p>
          Toute reproduction totale ou partielle sans autorisation est
          interdite.
        </p>
      </section>
    </main>
  )
}
