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
      day: "Journée 1",
      matches: [


          {
          label: "ESBVA vs TMB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875391/bs.html"
        },
        {
          label: "TB vs LBB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875383/bs.html"
        },
        {
          label: "CBBS vs BLMA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875385/bs.html"
        },
        {
          label: "FCB vs ASVEL",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875389/bs.html"
        }
      
        ,
        {
          label: "UFAB vs BL",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875381/bs.html"
        },
        {
          label: "BCTM vs CB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875388/bs.html"
        },
      ]
    },
   
    
      
{
      day: "Journée 2",
      matches: [


          {
          label: "LBB vs UFA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875394/bs.html"
        },
        {
          label: "BLMA vs TB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875397/bs.html"
        },
        {
          label: "ASVEL vs BCTM",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875403/bs.html"
        },
        {
          label: "TMB vs FCB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875406/bs.html"
        }
      
        ,
        {
          label: "BL vs ESBVA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875408/bs.html"
        },
        {
          label: "CB vs CBBS",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875399/bs.html"
        },
      ]
    }, 
{
      day: "Journée 3",
      matches: [


          {
          label: "TB vs CB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875413/bs.html"
        },
        {
          label: "CBBS vs ASVEL",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875415/bs.html"
        },
        {
          label: "BCTM vs TMB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875417/bs.html"
        },
        {
          label: "ESBVA vs LBB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875420/bs.html"
        }
      
        ,
        {
          label: "FCB vs BL",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875419/bs.html"
        },
        {
          label: "UFA vs BLMA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875410/bs.html"
        },
      ]
    },
   {
      day: "Journée 4",
      matches: [


          {
          label: "CB vs UFA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875422/bs.html"
        },
        {
          label: "TMB vs CBBS",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875426/bs.html"
        },
        {
          label: "LBB vs FCB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875430/bs.html"
        },
        {
          label: "BL vs BCTM",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875428/bs.html"
        }
      
        ,
        {
          label: "BLMA vs ESBVA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875432/bs.html"
        },
        {
          label: "ASVEL vs TB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875424/bs.html"
        },
      ]
    },

  ],
  LF2: [
    {
      day: "Journée 1",
      matches: [
          {
          label: "Nice vs Feytiat",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875344/bs.html"
        },
        {
          label: "CJSG vs BCMF",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875349/bs.html"
        },
        {
          label: "USOM vs Insep",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875345/bs.html"
        },
        {
          label: "MBA vs RMB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875346/bs.html"
        },
        {
          label: "Trith vs SAH",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875347/bs.html"
        },
        {
          label: "LFA vs RVBC",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875348/bs.html"
        },
        {
          label: "PVBC vs CBF",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875350/bs.html"
        }
      
      ]
    }, {
      day: "Journée 2",
      matches: [
          {
          label: "RMB vs USOM",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875357/bs.html"
        },
        {
          label: "INSEP vs MBA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875351/bs.html"
        },
        {
          label: "FB vs PVBC",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875352/bs.html"
        },
        {
          label: "BCMF vs Nice",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875353/bs.html"
        },
        {
          label: "RVBC vs CJSG",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875354/bs.html"
        },
        {
            label: "CB vs Trith",
    
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875356/bs.html"
        },
        {
               label: "SAH vs LFA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875355/bs.html"
        }
      
      ]
    }, {
      day: "Journée 3",
      matches: [
          {
          label: "FB vs BCMF",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875359/bs.html"
        },
        {
          label: "Trith vs INSEP",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875361/bs.html"
        },
        {
          label: "Nice vs RMB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875358/bs.html"
        },
        {
          label: "MBA vs USOM",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875360/bs.html"
        },
        {
          label: "LFA vs CB",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875362/bs.html"
        },
        {
            label: "CJSG vs SAH",
    
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875363/bs.html"
        },
        {
               label: "PVBC vs RVBC",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875364/bs.html"
        }
      
      ]
    },
      
      ]
    }

