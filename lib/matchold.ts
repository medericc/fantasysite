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

,
    {
      day: "Journée 18",
      matches: [
         {
          label: "TMB vs UFA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713759/bs.html"
        },
        {
          label: "ESBVA vs RVBC",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724093/bs.html"
        },
        {
          label: "FCB vs ASVEL",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724094/bs.html"
        },
       
        {
          label: "BL vs CB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724096/bs.html"
        }
        ,
        {
          label: "BLMA vs CBBS",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724097/bs.html"
        }
        ,
        {
          label: "LB vs TB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724098/bs.html"
        }
      
      ]
    }
,
    {
      day: "Journée 19",
      matches: [
         {
          label: "ASVEL vs ESBVA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724099/bs.html"
        },
        {
          label: "CB vs FCB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724100/bs.html"
        },
        {
          label: "RVBC vs BL",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724101/bs.html"
        },
       
        {
          label: "CBBS vs TMB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724102/bs.html"
        }
        ,
        {
          label: "TB vs BLMA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724103/bs.html"
        }
        ,
        {
          label: "UFAB vs LBB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724104/bs.html"
        }
      
      ]
    }
,
    {
      day: "Journée 20",
      matches: [
         {
          label: "FCB vs BL",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713760/bs.html"
        },
        {
          label: "ESBVA vs CB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724105/bs.html"
        },
        {
          label: "ASVEL vs RV",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724106/bs.html"
        },
       
        {
          label: "TMB vs TB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724107/bs.html"
        }
        ,
        {
          label: "BLMA vs LBB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724108/bs.html"
        }
        ,
        {
          label: "CBBS vs UFA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724109/bs.html"
        }
      
      ]
    }
,
    {
      day: "Journée 21",
      matches: [
         {
          label: "BL vs ESBVA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724110/bs.html"
        },
        {
          label: "RV vs FCB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724111/bs.html"
        },
        {
          label: "CB vs ASVEL",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724112/bs.html"
        },
       
        {
          label: "LBB vs TMB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724113/bs.html"
        }
        ,
        {
          label: "UFA vs BLMA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724114/bs.html"
        }
        ,
        {
          label: "TB vs CBBS",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724115/bs.html"
        }
      
      ]
    }
,
    {
      day: "Journée 22",
      matches: [
         {
          label: "ESBVA vs FCB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724116/bs.html"
        },
        {
          label: "ASVEL vs BL",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724117/bs.html"
        },
        {
          label: "RV vs CB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724118/bs.html"
        },
       
        {
          label: "TMB vs BLMA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724119/bs.html"
        }
        ,
        {
          label: "CBBS vs LBB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724120/bs.html"
        }
        ,
        {
          label: "UFA vs TB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724121/bs.html"
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
    },
    {
      day: "Journée 19",
      matches: [
          {
          label: "MBA vs INSEP",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713890/bs.html"
        },
        {
          label: "Reims vs LFA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713891/bs.html"
        },
        {
          label: "Nice vs SIG",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713892/bs.html"
        },
        {
          label: "BCMF vs PVBC",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713893/bs.html"
        },
        {
          label: "STB vs USO",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713894/bs.html"
        },
        {
          label: "SAH vs RMB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713895/bs.html"
        },
        {
          label: "BCTM vs FB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713896/bs.html"
        }
      
      ]
    }
    ,
    {
      day: "Journée 20",
      matches: [
          {
          label: "RMB vs MBA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713897/bs.html"
        },
        {
          label: "INSEP vs Reims",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713898/bs.html"
        },
        {
          label: "USOM vs BCMF",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713899/bs.html"
        },
        {
          label: "FB vs PVBC",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713900/bs.html"
        },
        {
          label: "BCTM vs Nice",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713901/bs.html"
        },
        {
          label: "SIG vs SAH",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713902/bs.html"
        },
        {
          label: "LFA vs STB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713903/bs.html"
        }
      
      ]
    }
     ,
    {
      day: "Journée 21",
      matches: [
          {
          label: "STB vs INSEP",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713904/bs.html"
        },
        {
          label: "BCMF vs LFA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713905/bs.html"
        },
        {
          label: "MBA vs SIG",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713906/bs.html"
        },
        {
          label: "SAH vs BCTM",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713907/bs.html"
        },
        {
          label: "PVB vs USO",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713908/bs.html"
        },
        {
          label: "Reims vs RMB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713909/bs.html"
        },
        {
          label: "Nice vs FB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713910/bs.html"
        }
      
      ]
    }

     ,
    {
      day: "Journée 22",
      matches: [
          {
          label: "LFA vs MBA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713911/bs.html"
        },
        {
          label: "SIG vs Reims",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713912/bs.html"
        },
        {
          label: "INSEP vs BCMF",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713913/bs.html"
        },
        {
          label: "Rouen vs PVBC",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713914/bs.html"
        },
        {
          label: "FB vs USOM",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713915/bs.html"
        },
        {
          label: "Nice vs SAH",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713916/bs.html"
        },
        {
          label: "BCTM vs STB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713917/bs.html"
        }
      
      ]
    }
    ,
    {
      day: "Journée 23",
      matches: [
          {
          label: "PVBC vs INSEP",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713918/bs.html"
        },
        {
          label: "SAH vs LFA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713919/bs.html"
        },
        {
          label: "STB vs SIG",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713920/bs.html"
        },
        {
          label: "MBA vs BCTM",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713921/bs.html"
        },
        {
          label: "CB vs Nice",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713922/bs.html"
        },
        {
          label: "USOM vs Reims",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713923/bs.html"
        },
        {
          label: "BCMF vs FB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713924/bs.html"
        }
      
      ]
    }
     ,
    {
      day: "Journée 24",
      matches: [
          {
          label: "INSEP vs USOM",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713929/bs.html"
        },
        {
          label: "Nice vs MBA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713925/bs.html"
        },
        {
          label: "BCTM vs Reims",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713926/bs.html"
        },
        {
          label: "LFA vs PVBC",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713928/bs.html"
        },
        {
          label: "FB vs RMB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713930/bs.html"
        },
        {
          label: "SIG vs BCMF",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713927/bs.html"
        },
        {
          label: "SAH vs STB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713931/bs.html"
        }
      
      ]
    }
      ,
    {
      day: "Journée 25",
      matches: [
          {
          label: "CB vs FB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713938/bs.html"
        },
        {
          label: "MBA vs SAH",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713937/bs.html"
        },
        {
          label: "BCMF vs BCTM",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713935/bs.html"
        },
        {
          label: "STB vs Nice",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713936/bs.html"
        },
        {
          label: "PVBC vs SIG",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713934/bs.html"
        },
        {
          label: "USOM vs FLA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713933/bs.html"
        },
        {
          label: "RMB vs INSEP",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713932/bs.html"
        }
      
      ]
    }
,
    {
      day: "Journée 26",
      matches: [
          {
          label: "STB vs MBA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713939/bs.html"
        },
        {
          label: "SAH vs CB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713940/bs.html"
        },
        {
          label: "Nice vs BCMF",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713941/bs.html"
        },
        {
          label: "BCTM vs PVBC",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713942/bs.html"
        },
        {
          label: "SIG vs USOM",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713943/bs.html"
        },
        {
          label: "LFA vs RMB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713944/bs.html"
        },
        {
          label: "INSEP vs FB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2713945/bs.html"
        }
      
      ]
    }
  ]
};
