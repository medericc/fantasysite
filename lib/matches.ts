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
          label: "BLMA vs CB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724084/bs.html"
        },
        {
          label: "CBBS vs ESBVA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724082/bs.html"
        },
        {
          label: "UFAB vs FCB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724083/bs.html"
        },
       
        {
          label: "LBB vs ASVEL",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724085/bs.html"
        }
        ,
        {
          label: "RV vs TB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724086/bs.html"
        }
        ,
        {
          label: "TMB vs BL",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713758/bs.html"
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
    ,
    {
      day: "Journée 17",
      matches: [
         {
          label: "ESBVA vs UFA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724087/bs.html"
        },
        {
          label: "FCB vs TMB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724088/bs.html"
        },
        {
          label: "BL vs BLMA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724089/bs.html"
        },
       
        {
          label: "CB vs LBB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724090/bs.html"
        }
        ,
        {
          label: "ASVEL vs TB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724091/bs.html"
        }
        ,
        {
          label: "RV vs CBBS",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724092/bs.html"
        }
      
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
    },
    {
      day: "Journée 18",
      matches: [
          {
          label: "MBA vs USOM",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713883/bs.html"
        },
        {
          label: "PVBC vs Reims",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713884/bs.html"
        },
        {
          label: "Rouen vs BCMF",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713885/bs.html"
        },
        {
          label: "SIG vs BCTM",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713886/bs.html"
        },
        {
          label: "LFA vs Nice",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713887/bs.html"
        },
        {
          label: "INSEP vs SAH",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713888/bs.html"
        },
        {
          label: "FB87 vs STB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713889/bs.html"
        }
      
      ]
    }
  ]
};
