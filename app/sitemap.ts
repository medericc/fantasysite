import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lfbfantasy.com'

  const leagues = ['lfb', 'lf2'] as const
  const views = ['notes', 'allStars', 'firstTeam'] as const
  const years = ['2025'] as const

  const routes: MetadataRoute.Sitemap = []

  for (const league of leagues) {
    for (const view of views) {
      for (const year of years) {
        routes.push({
          url: `${baseUrl}/${league}/${view}/${year}`,
          lastModified: new Date(),
          changeFrequency: 'weekly', // ✅ OK maintenant
        priority:
  view === 'notes'
    ? 0.9
    : view === 'allStars'
    ? 0.8
    : 0.7
        })
      }
    }
  }

  return routes
}
