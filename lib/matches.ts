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
   
    
      


  ],
  LF2: [
    {
      day: "Journée 1",
      matches: [
          {
          label: "Nice vs Feytiat",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2879368/bs.html"
        },
        {
          label: "Geispolsheim vs BCMF",
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
    }
      
      ]
    }

