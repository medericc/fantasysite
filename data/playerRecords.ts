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
  slug: "carla-leite",
  records: [
    { label: "Meilleure évaluation de l’histoire des Playoffs LFB", value: "21 de rating", league: "LFB" },

    { label: "Meilleure évaluation de l’histoire sur une campagne de Playoffs LFB", value: "21 de rating", season: "2024", league: "LFB" },

    { label: "Meilleure moyenne de points à 20 ans en LFB", value: "15 points", league: "LFB" },

    { label: "Plus jeune joueuse à atteindre 975 points en LFB", value: "20 ans", league: "LFB" },

    { label: "Seule Européenne meilleure scoreuse de LFB avec 40 % à 3 pts", value: "16,4 points", league: "LFB" },

    { label: "Plus grand nombre de trophées points + passes", value: "2", league: "LFB" },
  { label: "Meilleure moyenne points + passes à 20 ans en LFB", value: "20,3 pts+ast", league: "LFB" },


    { label: "Européenne la plus rapide à atteindre 975 points en LFB", value: "20 ans", league: "LFB" },
    { label: "Meilleure moyenne de points sur 3 saisons en LFB", value: "15 points", league: "LFB" },



    { label: "Meilleur total points + passes sur 3 saisons en LFB", value: "20,3 pts+ast", league: "LFB" },
    { label: "Meilleure moyenne de points de l’histoire des Playoffs LFB", value: "20 points", league: "LFB" },
    { label: "Meilleure marqueuse de l’histoire sur une campagne de Playoffs LFB", value: "20 points", season: "2024", league: "LFB" },

    { label: "Plus jeune meilleure marqueuse de l’histoire de la LFB", value: "20 ans", season: "2025", league: "LFB" },


    { label: "Joueuse la plus décisive sur une campagne de Playoffs LFB", value: "25,6 pts + ast",season: "2024", league: "LFB" },



    { label: "Seule Européenne à finir une saison à 15 pts et 5 ast en LFB", value: "française", season: "2024", league: "LFB" },
    { label: "Seule joueuse de l’histoire des Playoffs LFB à +20 pts de moyenne", value: "21 points",  league: "LFB" },
    { label: "Plus jeune joueuse à finir joueuse la plus décisive de la LFB", value: "21,3 pts+ast", season: "2024", league: "LFB" },

    { label: "Seule joueuse de l’histoire des Playoffs LFB à scorer 26 points à 90 %", value: "26 pts à 90 %", season: "2024", league: "LFB" },
   
    { label: "Joueuse la plus rapide à intégrer la First Team de la LFB", value: "2e saison", league: "LFB" },
     { label: "Meilleure marqueuse de la LFB", value: "16,4 points",season: "2025", league: "LFB" },
          { label: "Joueuse la plus décisive de la LFB", value: "21,3 pts+ast",season: "2024", league: "LFB" },
         { label: "Joueuse la plus décisive de la LFB", value: "21,5 pts+ast",season: "2025", league: "LFB" },
 
  ],
}

]
