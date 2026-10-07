import FirstPickStats from "@/components/FirstPickStats"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.lfbfantasy.com/lfb/notes/2027',
  },
}
type View = "notes" | "allStars" | "firstTeam"
type League = "lfb" | "lf2"

type PageParams = {
  league: League
  view: View
  year: string
}

/* =========================
   METADATA (OBLIGATOIRE async)
========================= */
export async function generateMetadata(
  { params }: { params: Promise<PageParams> }
): Promise<Metadata> {
  const { league, view, year } = await params

  const leagueLabel = league.toUpperCase()

  const titles: Record<View, string> = {
    notes: `${leagueLabel} ${year} Basketball Féminin : classement, notes et stats des joueuses`,
    allStars: `All-Stars ${leagueLabel} ${year} – Sélection officielle | First Pick`,
    firstTeam: `First Team ${leagueLabel} ${year} – Meilleur cinq de la saison | First Pick`,
  }

  const descriptions: Record<View, string> = {
    notes: `Découvrez le classement des meilleures joueuses ${leagueLabel} ${year} basé sur l’intelligence artificielle First Pick.`,
    allStars: `Toutes les joueuses sélectionnées All-Stars ${leagueLabel} ${year}. Analyses et distinctions.`,
    firstTeam: `Le First Team ${leagueLabel} ${year} : le meilleur cinq de la saison.`,
  }

  return {
    title: titles[view],
    description: descriptions[view],
  }
}

/* =========================
   STATIC PARAMS
========================= */
export async function generateStaticParams() {
  return [
    { league: "lfb", view: "notes", year: "2026" },
     { league: "lfb", view: "notes", year: "2027" },
    { league: "lfb", view: "allStars", year: "2026" },
    { league: "lfb", view: "firstTeam", year: "2026" },
    { league: "lf2", view: "notes", year: "2026" },
     { league: "lf2", view: "notes", year: "2027" },
  ]
}

/* =========================
   PAGE (OBLIGATOIRE async)
========================= */
export default async function Page({
  params,
}: {
  params: Promise<PageParams>
}) {
  const { league, view, year } = await params



const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://www.lfbfantasy.com/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": league.toUpperCase(),
      "item": `https://www.lfbfantasy.com/${league}`,
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name":
        view === "notes"
          ? "Notes"
          : view === "allStars"
          ? "All-Stars"
          : "First Team",
      "item": `https://www.lfbfantasy.com/${league}/${view}`,
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": year,
      "item": `https://www.lfbfantasy.com/${league}/${view}/${year}`,
    },
  ],
}

  return (
    <>
     <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
     <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${
              view === "notes"
                ? "Classement"
                : view === "allStars"
                ? "All-Stars"
                : "First Team"
            } ${league.toUpperCase()} ${year}`,
            itemListOrder: "Descending",
            url: `https://www.lfbfantasy.com/${league}/${view}/${year}`,
          }),
        }}
      />
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Comment sont calculées les notes First Pick ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Les notes sont générées par notre propre modèle d’intelligence artificielle analysant statistiques, impact collectif et régularité."
          }
        },
        {
          "@type": "Question",
          "name": "À quelle fréquence les classements sont-ils mis à jour ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Les classements sont mis à jour après chaque journée de championnat."
          }
        }
      ]
    }),
  }}
/>



      <FirstPickStats
        league={league.toUpperCase() as "LFB" | "LF2"}
        view={view}
        year={year}
      />
    </>
  )
}
