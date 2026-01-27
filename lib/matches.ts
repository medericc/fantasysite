export type Match = {
  label: string;
  url: string;
};

export type MatchDay = {
  day: string;
  matches: Match[];
};

export const MATCHES: Record<"LFB" | "LF2", MatchDay[]> = {
  LFB: [
    {
      day: "J1",
      matches: [
        {
          label: "Lyon vs BLMA",
          url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2724078/bs.html"
        }
      ]
    }
  ],
  LF2: [
    {
      day: "J1",
      matches: [
        {
          label: "Toulouse vs Nice",
          url: "https://www.ffbb.com/u/FFBB/..."
        }
      ]
    }
  ]
};
