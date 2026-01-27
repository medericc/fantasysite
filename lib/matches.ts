export type Match = {
  label: string;
  url: string;
};

export type MatchDay = {
  day: string;
  matches: Match[];
};
// /bs.html pas oublier ca
export const MATCHES: Record<"LFB" | "LF2", MatchDay[]> = {
  LFB: [{
      day: "Journée 15",
      matches: [
        {
          label: "ASVEL vs BLMA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713757/bs.html"
        },
        {
          label: "TB vs ESBVA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724077/bs.html"
        },
        {
          label: "FCB vs CBBS",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724078/bs.html"
        },
        {
          label: "BL vs UFAB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724079/bs.html"
        }
        ,
        {
          label: "CB vs TMB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724080/bs.html"
        },
        {
          label: "RVB vs LBB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724081/bs.html"
        },
      ]
    },
    {
      day: "Journée 16",
      matches: [
        {
          label: "CBBS vs ESBVA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724082/bs.html"
        },
        {
          label: "UFAB vs FCB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724083/bs.html"
        },
        {
          label: "BLMA vs CB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724084/bs.html"
        },
        {
          label: "LBB vs ASVEL",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724085/bs.html"
        }
        // ,
        // {
        //   label: "Lyon vs BLMA",
        //   url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724086/bs.html"
        // },
        // {
        //   label: "Lyon vs BLMA",
        //   url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724087/bs.html"
        // },
      ]
    }
  ],
  LF2: [
    {
      day: "Journée 17",
      matches: [
          {
          label: "Nice vs INSEP",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713876/bs.html"
        },
        {
          label: "BCTM vs Aulnoye",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713877/bs.html"
        },
        {
          label: "STB vs BCMF",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713878/bs.html"
        },
        {
          label: "MBA vs PVBC",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713879/bs.html"
        },
        {
          label: "Reims vs USOM",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713880/bs.html"
        },
        {
          label: "SIG vs Rouen",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713881/bs.html"
        },
        {
          label: "SAH vs FB87",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713882/bs.html"
        }
      
      ]
    }
  ]
};
