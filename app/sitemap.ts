export const runtime = 'nodejs'

import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import Papa from 'papaparse'

type PlayerRow = {
  forename?: string
  name?: string
  prenom?: string
  nom?: string
}

/* =========================
   UTILS
========================= */
function slugify(prenom: string, nom: string) {
  return `${prenom} ${nom}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}


function loadCSV<T>(filePath: string): T[] {
  const file = fs.readFileSync(filePath, 'utf8')
  const parsed = Papa.parse<T>(file, { header: true })
  return parsed.data.filter(
  (row) => row && Object.values(row).some(Boolean)
)

}

/* =========================
   SITEMAP
========================= */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lfbfantasy.com'
  const routes: MetadataRoute.Sitemap = []

  const now = new Date()

  /* =========================
     NOTES (2026 ONLY)
  ========================= */
  ;(['lfb', 'lf2'] as const).forEach((league) => {
    routes.push({
      url: `${baseUrl}/${league}/notes/2026`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })

  /* =========================
     ALL-STARS
  ========================= */
  const allStarsYears = {
    lfb: ['2023', '2024', '2025', '2026'],
    lf2: ['2024', '2025', '2026'],
  } as const

  ;(['lfb', 'lf2'] as const).forEach((league) => {
    allStarsYears[league].forEach((year) => {
      routes.push({
        url: `${baseUrl}/${league}/allStars/${year}`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.8,
      })
    })
  })

  /* =========================
     FIRST TEAM
  ========================= */
  const firstTeamYears = ['2024', '2025'] as const

  ;(['lfb', 'lf2'] as const).forEach((league) => {
    firstTeamYears.forEach((year) => {
      routes.push({
        url: `${baseUrl}/${league}/firstTeam/${year}`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.7,
      })
    })
  })

  /* =========================
     JOUEUSES /joueuse/[slug]
  ========================= */
  const notesLFB = loadCSV<PlayerRow>(
    path.join(process.cwd(), 'public/lfb_notes.csv')
  )
  const notesLF2 = loadCSV<PlayerRow>(
    path.join(process.cwd(), 'public/lf2_notes.csv')
  )
  const allStars = loadCSV<PlayerRow>(
    path.join(process.cwd(), 'public/allstars.csv')
  )
  const firstTeams = loadCSV<PlayerRow>(
    path.join(process.cwd(), 'public/firstteam.csv')
  )

  const slugs = new Set<string>()

  ;[...notesLFB, ...notesLF2, ...allStars, ...firstTeams].forEach((p) => {
    const prenom = p.forename || p.prenom
    const nom = p.name || p.nom

    if (!prenom || !nom) return

    slugs.add(slugify(prenom, nom))
  })

  slugs.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/joueuse/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  return routes
}
