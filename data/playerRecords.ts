export type PlayerRecord = {
  slug: string
  records: {
    label: string
    value: string
    season?: string
    league?: "LFB" | "LF2"
  }[]
}

export const playerRecords: PlayerRecord[] = [
  {
    slug: "ainhoa-risacher",
    records: [
      {
        label: "Plus jeune joueuse sélectionnée All-Star",
        value: "19 ans",
        season: "2024",
        league: "LFB",
      },
      {
        label: "Meilleure progression de note sur une saison",
        value: "+1,8 points",
        season: "2025",
        league: "LFB",
      },
    ],
  },
  {
    slug: "alexia-chery",
    records: [
      {
        label: "Meilleure scoreuse extérieure de la saison",
        value: "17,4 points / match",
        season: "2025",
        league: "LF2",
      },
    ],
  },
]
