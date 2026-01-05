import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact – First Pick",
  description:
    "Contactez First Pick, média spécialisé dans le basket féminin LFB & LF2.",
}

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
        Contact
      </h1>

      <p className="mb-6 text-lg">
        Une question, une remarque ou une collaboration ?  
        Vous pouvez nous contacter à l’adresse suivante :
      </p>

      <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 text-center">
        <p className="text-xl font-semibold text-yellow-600">
          contact@lfbfantasy.com
        </p>
      </div>

      <p className="mt-6 text-sm text-slate-500">
        First Pick est un projet indépendant dédié à l’analyse du basket féminin.
      </p>
    </main>
  )
}
