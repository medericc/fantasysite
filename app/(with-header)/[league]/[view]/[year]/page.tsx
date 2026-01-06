import FirstPickStats from "@/components/FirstPickStats"
import Script from "next/script"
import type { Metadata } from "next"

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
    notes: `Classement des joueuses ${leagueLabel} ${year} – Notes & Stats IA | First Pick`,
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
    { league: "lfb", view: "allStars", year: "2026" },
    { league: "lfb", view: "firstTeam", year: "2026" },
    { league: "lf2", view: "notes", year: "2026" },
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

  return (
    <>
      <Script
        id="structured-data-page"
        type="application/ld+json"
        strategy="afterInteractive"
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
            url: `https://lfbfantasy.com/${league}/${view}/${year}`,
          }),
        }}
      />
<Script
  id="faq-schema"
  type="application/ld+json"
  strategy="afterInteractive"
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
