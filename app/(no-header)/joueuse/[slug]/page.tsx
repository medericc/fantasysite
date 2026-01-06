import type { Metadata } from "next"
import fs from "fs"
import path from "path"
import Script from "next/script"
import Papa from "papaparse"
import { playerRecords } from "@/data/playerRecords"
import { notFound } from "next/navigation"
import { cache } from "react"
import { 
  Trophy, 
  Star, 
  Award, 
  TrendingUp, 
  ChevronLeft,
  Target,
  Calendar,
  Users,
  Medal,
  Zap,
  History,
  BarChart3,
  Crown
} from 'lucide-react'

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

type TeamSelectionRow = {
  prenom: string
  nom: string
  ligue: string
  annee: string
  rang: string // "1" | "2" | "3"
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

function teamLabel(rang: string) {
  switch (rang) {
    case "1":
      return "First Team"
    case "2":
      return "Second Team"
    case "3":
      return "Third Team"
    default:
      return "Team"
  }
}

function getRankColor(rang: string) {
  switch (rang) {
    case "1": return 'from-yellow-500 to-amber-400'
    case "2": return 'from-gray-400 to-gray-300'
    case "3": return 'from-amber-700 to-amber-600'
    default: return 'from-slate-600 to-slate-500'
  }
}
function noteColorClass(note: number) {
  if (note >= 9)
    return "from-yellow-500 to-amber-400 shadow-amber-500/40"

  if (note >= 8)
    return "from-blue-500 to-cyan-500 shadow-blue-500/30"

  if (note >= 7)
    return "from-slate-600 to-slate-700 shadow-slate-700/30"

  if (note >= 6)
    return "from-slate-500 to-slate-600 shadow-slate-600/20"

  return "from-slate-700 to-slate-800 shadow-slate-800/20"
}



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
    description: `Découvrez le profil de ${prenom} ${nom}, ses notes par saison, ses sélections All-Stars et l'analyse IA First Pick.`,
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
  const teamSelections = loadCSV<TeamSelectionRow>(
    path.join(process.cwd(), "public/firstteam.csv")
  )

  /* ===== FILTER ===== */
 const notes = [
  ...lfbNotes.map((p) => ({ ...p, ligue: "LFB" })),
  ...lf2Notes.map((p) => ({ ...p, ligue: "LF2" })),
]
  .filter(
    (p) =>
      p.forename?.toLowerCase() === prenom.toLowerCase() &&
      p.name?.toLowerCase() === nom.toLowerCase()
  )
  .map((p) => ({
    saison: "2026",
    note: Number(p.rating?.replace(",", ".")),
    ligue: p.ligue as "LFB" | "LF2",
  }))

const noteNum =
  notes.length > 0 && notes[0].note
    ? Number(notes[0].note)
    : null

  const selections = allStars.filter(
    (p) =>
      p.prenom?.toLowerCase() === prenom.toLowerCase() &&
      p.nom?.toLowerCase() === nom.toLowerCase()
  )

  const records = playerRecords.find((p) => p.slug === slug)?.records || []

  const teams = teamSelections.filter(
    (p) =>
      p.prenom?.toLowerCase() === prenom.toLowerCase() &&
      p.nom?.toLowerCase() === nom.toLowerCase()
  )

  const totalAchievements = selections.length + teams.length + records.length
  const primaryLeague = selections[0]?.ligue || "LFB"

  /* ===== RENDER ===== */
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
            achievement: [
              ...(records.length
                ? records.map((r) => ({
                    "@type": "Achievement",
                    name: r.label,
                    description: r.value,
                  }))
                : []),
              ...(teams.length
                ? teams.map((t) => ({
                    "@type": "Achievement",
                    name: `${teamLabel(t.rang)} ${t.ligue}`,
                    description: `Sélection ${teamLabel(t.rang)} en ${t.ligue} — Saison ${t.annee}`,
                  }))
                : []),
            ],
            knowsAbout: [
              "Basket féminin",
              "LFB",
              "LF2",
              "Analyse de performance",
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        {/* Header avec navigation */}
        <div className="container mx-auto px-4 pt-8 pb-6">
          <a
            href={`/${primaryLeague.toLowerCase()}/notes/2026`}
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-yellow-600 transition-colors group mb-6"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour au classement {primaryLeague}
          </a>

          {/* Hero Section */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                    {prenom} {nom}
                  </h1>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 text-lg mb-6">
                  Profil, statistiques et analyse IA de <strong>{prenom} {nom}</strong>, joueuse de basket féminin suivie par First Pick.
                </p>

                {/* Stats Summary */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-600/10 to-amber-500/10">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {totalAchievements} distinction{totalAchievements > 1 ? 's' : ''}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-500/10">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {selections.length} All-Star{selections.length > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </div>

              {/* Note principale */}
              {noteNum !== null && (
  <div className="md:w-48">
    <div
      className={`
        bg-gradient-to-br
        ${noteColorClass(noteNum)}
        rounded-2xl
        p-6
        text-center
        shadow-lg
      `}
    >
      <div className="text-sm text-white/80 mb-2">
        Note IA 2026
      </div>

      <div className="text-4xl font-bold text-white mb-1">
        {noteNum.toFixed(1)}
      </div>

      <div className="text-xs text-white/70">
        Modèle First Pick
      </div>
    </div>
  </div>
)}
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 pb-16 space-y-8">

  {/* ================= NOTES PAR SAISON (FULL WIDTH) ================= */}
{/* ================= NOTES PAR SAISON (FULL WIDTH) ================= */}
{notes.length > 0 && (
  <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-6">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-500">
        <TrendingUp className="w-5 h-5 text-white" />
      </div>
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        Notes par saison
      </h2>
    </div>

    <div className="space-y-3">
      {notes.map((n, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-white dark:from-slate-800/30 dark:to-slate-700/30 border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-slate-400" />
            <div className="flex flex-col">
  <span className="font-medium text-slate-800 dark:text-slate-200">
    Saison {n.saison}
  </span>

  <span
    className={`
      text-xs font-medium mt-0.5
      ${n.ligue === "LFB"
        ? "text-slate-600"
        : "text-slate-600"}
    `}
  >
    {n.ligue}
  </span>
</div>

          </div>
          <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-600 to-amber-500 text-white font-bold">
            {Number(n.note).toFixed(1)}
          </div>
        </div>
      ))}
    </div>
  </section>
)}


  {/* ================= ALL-STARS + TEAMS (SEULE GRILLE 2 COLONNES) ================= */}
  <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

    {/* ALL-STARS */}
    <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-500">
          <Star className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Sélections All-Stars
        </h2>
      </div>

      {selections.length === 0 ? (
        <div className="text-center py-8">
          <Star className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-500 dark:text-slate-400">
            Aucune sélection All-Stars enregistrée.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {selections.map((s, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-gradient-to-r from-slate-50 to-white dark:from-slate-800/30 dark:to-slate-700/30 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex justify-between items-start mb-1">
                <div className="font-semibold text-slate-900 dark:text-white">
                  {s.ligue} — {s.annee}
                </div>
                <span className="text-sm font-medium text-yellow-600">
                  All-Star
                </span>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300">
                {s.equipe}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>

    {/* TEAMS */}
    <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-500">
          <Award className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Sélections d'équipe
        </h2>
      </div>

      {teams.length === 0 ? (
        <div className="text-center py-8">
          <Award className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-500 dark:text-slate-400">
            Aucune sélection d'équipe enregistrée.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {teams.map((t, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-gradient-to-r from-slate-50 to-white dark:from-slate-800/30 dark:to-slate-700/30 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {teamLabel(t.rang)}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">
                    {t.ligue}
                  </div>
                </div>
                <div className="text-sm text-slate-500">
                  {t.annee}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>

  </section>

  {/* ================= RECORDS (FULL WIDTH) ================= */}
  {records.length > 0 && (
    <section className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-500">
          <Medal className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Records et distinctions
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {records.map((r, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-gradient-to-r from-slate-50 to-white dark:from-slate-800/30 dark:to-slate-700/30 border-l-4 border-yellow-500"
          >
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">
              {r.label}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {r.value}
              {r.season && ` • Saison ${r.season}`}
              {r.league && ` • ${r.league}`}
            </p>
          </div>
        ))}
      </div>
    </section>
  )}

  {/* ================= SEO ================= */}
  <section className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl shadow-lg p-8">
    <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
      Analyse et perspective
    </h2>

    <p className="text-slate-700 dark:text-slate-300">
      Cette page centralise l'ensemble des performances et distinctions de{" "}
      <strong>{prenom} {nom}</strong> en championnat {primaryLeague}.
    </p>
  </section>

</main>

      </div>
    </>
  )
}