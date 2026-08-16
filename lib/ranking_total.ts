// lib/ranking_total.ts
export const runtime = "nodejs";
import { prisma } from '@/lib/prisma';

export async function getWeeklyRanking(leagueId: number, weekId: number) {
  const choices = await prisma.choice.findMany({
    where: {
      week_id: weekId,
      week: {
        league_id: leagueId, // filtrage dynamique
      },
    },
    select: {
      user_id: true,
      points: true,
      user: {
        select: {
          pseudo: true,
        },
      },
    },
  });

  const userPointsMap = new Map<number, { pseudo: string; total: number }>();

  for (const choice of choices) {
    const userId = choice.user_id;
    const pseudo = choice.user?.pseudo ?? 'Anonyme';
    const points = choice.points ?? 0;

    if (!userPointsMap.has(userId)) {
      userPointsMap.set(userId, { pseudo, total: points });
    } else {
      userPointsMap.get(userId)!.total += points;
    }
  }

  return Array.from(userPointsMap.entries())
    .map(([userId, { pseudo, total }]) => ({
      userId,
      pseudo,
      points: total,
    }))
    .sort((a, b) => b.points - a.points);
}

export async function getTotalRanking(leagueId: number) {
  // On récupère tous les utilisateurs ayant participé dans cette ligue
  const users = await prisma.user.findMany({
    select: {
      id: true,             // ✅ on prend aussi l'id
      pseudo: true,
      choice: {
        where: {
          week: {
            league_id: leagueId,
          },
        },
        select: { points: true },
      },
    },
  });

  const rankings = users.map((user) => {
    const totalPoints = user.choice.reduce(
      (sum, choice) => sum + (choice.points ?? 0),
      0
    );

    return {
      userId: user.id,       // ✅ ajouté
      pseudo: user.pseudo ?? 'Anonyme',
      points: totalPoints,
    };
  });

  // Classement décroissant
  return rankings.sort((a, b) => b.points - a.points);
}

