export const runtime = "nodejs";
import { prisma } from '@/lib/prisma';

export async function getWeeklyRanking(leagueId: number, weekId: number) {
  const choices = await prisma.choice.findMany({
    where: {
      week_id: weekId,
      week: {
        league_id: leagueId,
      },
    },
    select: {
      user_id: true,
      player: {
        select: {
          player_rate: {
            where: {
              week_id: weekId,
            },
            select: {
              rate: true,
            },
          },
        },
      },
    },
  });

  const userPointsMap = new Map<number, number>();

  for (const choice of choices) {
    const userId = choice.user_id;
    const ratings = choice.player.player_rate.map(r => r.rate);
    const total = ratings.reduce((sum, r) => sum + r, 0);
    userPointsMap.set(userId, (userPointsMap.get(userId) ?? 0) + total);
  }

  const ranking = Array.from(userPointsMap.entries())
    .map(([userId, points]) => ({ userId, points }))
    .sort((a, b) => b.points - a.points);

  return ranking;
}


export async function getTotalRanking(leagueId: number) {
  const choices = await prisma.choice.findMany({
    where: {
      week: {
        league_id: leagueId,
      },
    },
    select: {
      user_id: true,
      player: {
        select: {
          player_rate: {
            where: {
              week: {
                league_id: leagueId,
              },
            },
            select: {
              rate: true,
            },
          },
        },
      },
    },
  });

  const userPointsMap = new Map<number, number>();

  for (const choice of choices) {
    const userId = choice.user_id;
    const ratings = choice.player.player_rate.map(r => r.rate);
    const total = ratings.reduce((sum, r) => sum + r, 0);
    userPointsMap.set(userId, (userPointsMap.get(userId) ?? 0) + total);
  }

  const ranking = Array.from(userPointsMap.entries())
    .map(([userId, points]) => ({ userId, points }))
    .sort((a, b) => b.points - a.points);

  return ranking;
}
