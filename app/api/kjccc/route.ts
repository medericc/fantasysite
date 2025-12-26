import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET() {
  try {
    const url =
      "https://kjccc.prestosports.com/sports/wbkb/2025-26/div1/players?sort=ast&view=&pos=bc&r=1";

    const html = await fetch(url).then((res) => res.text());
    const $ = cheerio.load(html);

    const rows = $("table tbody tr");
    const players: any[] = [];

    rows.each((i, el) => {
      if (i >= 10) return false; // stop after 10 players

      const cols = $(el).find("td");

      const rank = $(cols[0]).text().trim();
      const name = $(cols[1]).text().trim();
      const team = $(cols[2]).text().trim();

      const gp = $(cols[3]).text().trim();
      const gs = $(cols[4]).text().trim();
      const off = $(cols[5]).text().trim();
      const def = $(cols[6]).text().trim();
      const reb = $(cols[7]).text().trim();
      const ast = $(cols[8]).text().trim();
      const to = $(cols[9]).text().trim();
      const stl = $(cols[10]).text().trim();
      const blk = $(cols[11]).text().trim();

      players.push({
        rank,
        name,
        team,
        gp,
        gs,
        off,
        def,
        reb,
        ast,
        to,
        stl,
        blk,
      });
    });

    return NextResponse.json(players);
  } catch (e) {
    return NextResponse.json({ error: "Scraping failed", details: e }, { status: 500 });
  }
}
