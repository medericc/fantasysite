// app/api/dashboard/route.ts

export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getCurrentUserId } from "@/lib/auth";
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
    const userId = await getCurrentUserId();

    const dbUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        pseudo: true,
      },
    });

    const results = [];

   for (const [leagueName, config] of Object.entries(LEAGUES)) {

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

  const latestWeek = weeks[weeks.length - 1];

  if (!latestWeek) {
    results.push({
      league: leagueName,
      week: null,
      weekIndex: 0,
      weekPoints: 0,
      totalIndex: 0,
      totalPoints: 0,
      username: dbUser?.pseudo ?? null,
    });

    continue;
  }

  const weekRanking = await getWeeklyRanking(
    config.id,
    latestWeek.id
  );

  const totalRanking = await getTotalRanking(config.id);
      const weekUser = weekRanking.find(
        (u) => u.userId === userId
      );

      const totalUser = totalRanking.find(
        (u) => u.userId === userId
      );

      results.push({
        league: leagueName,

        week: latestWeek.name,

        weekIndex: weekUser
          ? weekRanking.findIndex(
              (u) => u.userId === userId
            ) + 1
          : 0,

        weekPoints: weekUser?.points ?? 0,

        totalIndex: totalUser
          ? totalRanking.findIndex(
              (u) => u.userId === userId
            ) + 1
          : 0,

        totalPoints: totalUser?.points ?? 0,

        username: dbUser?.pseudo ?? null,
      });
    }

    return NextResponse.json(results);
  } catch (error) {
    console.error("Dashboard error:", error);

    return NextResponse.json(
      {
        error: "Erreur lors du chargement du dashboard",
      },
      {
        status: 500,
      }
    );
  }
}