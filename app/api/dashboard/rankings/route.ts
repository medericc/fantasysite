// app/api/dashboard/rankings/route.ts

export const runtime = "nodejs";

import { NextResponse } from "next/server";
import {
  getTotalRanking,
  getWeeklyRanking,
} from "@/lib/ranking_total";
import { prisma } from "@/lib/prisma";

const LEAGUES = {
  LFB: {
    id: 1,
    minWeek: 1,
    maxWeek: 22,
  },

  LF2: {
    id: 2,
    minWeek: 23,
    maxWeek: 48,
  },
};

export async function GET() {
  try {
    const result: Record<string, any> = {};

    for (const [leagueName, config] of Object.entries(
      LEAGUES
    )) {
    const weeks = await prisma.week.findMany({
  where: {
    league_id: config.id,
    player_rate: {
      some: {},
    },
  },
  orderBy: {
    id: "asc",
  },
  select: {
    id: true,
    name: true,
    league_id: true,
  },
});

const validWeeks = weeks;

      const weekly: Record<string, any[]> = {};

      for (const week of validWeeks) {
        const ranking = await getWeeklyRanking(
          config.id,
          week.id
        );

        weekly[week.name] = ranking.map(
          (r, index) => ({
            username: r.pseudo,
            week: week.name,
            weekIndex: index + 1,
            weekPoints: r.points,
            totalIndex: 0,
            totalPoints: 0,
          })
        );
      }

 const total = await getTotalRanking(config.id);

      const totalFormatted = total.map(
        (r, index) => ({
          username: r.pseudo,
          week: "",
          weekIndex: 0,
          weekPoints: 0,
          totalIndex: index + 1,
          totalPoints: r.points,
        })
      );

      result[leagueName] = {
        weekly,
        total: totalFormatted,
      };
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Rankings error:", error);

    return NextResponse.json(
      {
        error: "Erreur lors du chargement des classements",
      },
      {
        status: 500,
      }
    );
  }
}