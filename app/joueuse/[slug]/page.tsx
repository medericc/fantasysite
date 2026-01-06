import type { Metadata } from "next"
import fs from "fs"
import path from "path"
import Script from "next/script"
import Papa from "papaparse"
import { playerRecords } from "@/data/playerRecords"
import { notFound } from "next/navigation"
import { cache } from "react"

/* =========================
   TYPES
========================= */
type NoteRow = {
  forename: string
  name: string
  rating: string
}

type AllStarRow = {
  prenom: string
  nom: string
  ligue: string
  annee: string
  equipe: string
}

/* =========================
   UTILS
========================= */
function deslugify(slug?: string | string[] | null) {
  if (!slug) return null
  if (Array.isArray(slug)) return null

  const clean = slug.trim()
  if (!clean) return null

  const parts = clean.split("-").filter(Boolean)
  if (parts.length === 0) return null

  const prenom = parts.shift()!
  const nom = parts.join(" ")

  return {
    prenom: prenom.charAt(0).toUpperCase() + prenom.slice(1),
    nom: nom.toUpperCase(),
  }
}



const loadCSV = cache(<T,>(filePath: string): T[] => {
  const file = fs.readFileSync(filePath, "utf8")
  const parsed = Papa.parse<T>(file, { header: true })
  return parsed.data.filter(Boolean)
})




/* =========================
   METADATA
========================= */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string | string[] }>
}): Promise<Metadata> {
  const { slug } = await params
  const data = deslugify(slug)

  if (!data) {
    return {
      title: "Joueuse – First Pick",
      description:
        "Profils, statistiques et analyses IA des joueuses de basket féminin (LFB & LF2).",
    }
  }

  const { prenom, nom } = data

  return {
    title: `${prenom} ${nom} – Profil, stats & notes IA | First Pick`,
    description: `Découvrez le profil de ${prenom} ${nom}, ses notes par saison, ses sélections All-Stars et l’analyse IA First Pick.`,
  }
}




/* =========================
   PAGE
========================= */
export default async function PlayerPage({
  params,
}: {
  params: Promise<{ slug?: string | string[] }>
}) {
  const { slug } = await params
  const data = deslugify(slug)

  if (!data || !slug || Array.isArray(slug)) {
    notFound()
  }

  const { prenom, nom } = data




  /* ===== LOAD DATA ===== */
  const lfbNotes = loadCSV<NoteRow>(
    path.join(process.cwd(), "public/lfb_notes.csv")
  )
  const lf2Notes = loadCSV<NoteRow>(
    path.join(process.cwd(), "public/lf2_notes.csv")
  )
  const allStars = loadCSV<AllStarRow>(
    path.join(process.cwd(), "public/allstars.csv")
  )

  /* ===== FILTER ===== */
  const notes = [...lfbNotes, ...lf2Notes]
    .filter(
      (p) =>
        p.forename?.toLowerCase() === prenom.toLowerCase() &&
        p.name?.toLowerCase() === nom.toLowerCase()
    )
    .map((p) => ({
      saison: "2025", // 🔥 tu pourras affiner plus tard
      note: p.rating?.replace(",", "."),
    }))

 const selections = allStars.filter(
  (p) =>
    p.prenom?.toLowerCase() === prenom.toLowerCase() &&
    p.nom?.toLowerCase() === nom.toLowerCase()
)
const records =
  playerRecords.find((p) => p.slug === slug)?.records || []

  /* =========================
     RENDER
  ========================= */
  return (
    <>
      {/* ===== SCHEMA PERSON ===== */}
    <Script
  id="schema-athlete"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Athlete",
      name: `${prenom} ${nom}`,
      gender: "Female",
      sport: "Basketball",
      url: `https://lfbfantasy.com/joueuse/${slug}`,
      affiliation: {
        "@type": "SportsOrganization",
        name: "Championnat LFB / LF2",
      },
      achievement: records.length
  ? records.map((r) => ({
        "@type": "Achievement",
        name: r.label,
        description: r.value,
      })): undefined,
      knowsAbout: [
        "Basket féminin",
        "LFB",
        "LF2",
        "Analyse de performance",
      ],
    }),
  }}
/>


      <main className="max-w-4xl mx-auto px-4 py-12">
     <a
  href={`/${selections[0]?.ligue?.toLowerCase() ?? "lfb"}/notes/2025`}
  className="
    inline-flex items-center
    text-sm
    text-yellow-600
    hover:underline
    mb-6
  "
>
  ← Retour au classement {selections[0]?.ligue ?? "LFB"}
</a>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {prenom} {nom}
        </h1>

        <p className="text-slate-600 mb-8">
          Profil, statistiques et analyse IA de{" "}
          <strong>{prenom} {nom}</strong>, joueuse de basket féminin suivie par
          First Pick.
        </p>

        {/* ===== NOTES PAR SAISON ===== */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">
            Notes par saison
          </h2>

          {notes.length === 0 ? (
            <p className="text-slate-500">
              Aucune note disponible pour cette joueuse.
            </p>
          ) : (
            <ul className="space-y-2">
              {notes.map((n, i) => (
                <li
                  key={i}
                  className="flex justify-between bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded"
                >
                  <span>Saison {n.saison}</span>
                  <span className="font-semibold">{n.note}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* ===== ALL-STARS ===== */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">
            Sélections All-Stars
          </h2>

          {selections.length === 0 ? (
            <p className="text-slate-500">
              Aucune sélection All-Stars enregistrée.
            </p>
          ) : (
            <ul className="space-y-2">
              {selections.map((s, i) => (
                <li
                  key={i}
                  className="bg-white dark:bg-slate-800 border px-4 py-2 rounded"
                >
                  {s.ligue} — Saison {s.annee} ({s.equipe})
                </li>
              ))}
            </ul>
          )}
        </section>
{records.length > 0 && (
  <section className="mb-10">
    <h2 className="text-xl font-bold mb-4">
      Records et distinctions personnelles
    </h2>

    <ul className="space-y-3">
      {records.map((r, i) => (
        <li
          key={i}
          className="
            bg-slate-100 dark:bg-slate-800
            border-l-4 border-yellow-500
            px-4 py-3 rounded
          "
        >
          <p className="font-semibold">
            {r.label}
          </p>

          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {r.value}
            {r.season && ` — Saison ${r.season}`}
            {r.league && ` (${r.league})`}
          </p>
        </li>
      ))}
    </ul>
  </section>
)}
{records.length > 0 && (
  <p className="text-slate-600">
    Au cours de sa carrière,{" "}
    <strong>{prenom} {nom}</strong> s’est distinguée par plusieurs records
    et performances notables en championnat {records[0]?.league}.
    Ces distinctions confirment son impact et sa progression au plus haut
    niveau du basket féminin.
  </p>
)}

        {/* ===== SEO TEXT ===== */}
        <section className="text-slate-600 space-y-4">
          <p>
            Cette page centralise l’ensemble des performances et distinctions de{" "}
            {prenom} {nom} en championnat {selections[0]?.ligue ?? "LFB / LF2"}.
          </p>

          <p>
            Les notes sont calculées par le modèle d’intelligence artificielle
            First Pick, prenant en compte l’impact réel sur le jeu et le contexte
            des rencontres.
          </p>
        </section>

        {/* ===== BACKLINK ===== */}
        <div className="mt-10 pt-6 border-t">
          <a
            href="/lfb/notes/2025"
            className="text-yellow-600 hover:underline"
          >
            ← Retour aux classements
          </a>
        </div>
      </main>
    </>
  )
}
