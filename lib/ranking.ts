export const runtime = "nodejs";
import { prisma } from "@/lib/prisma";

// ============================================================
// CLASSEMENT SEMAINE
// ============================================================

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
      // C'EST CECI QUI MANQUAIT ET FAISAIT PLANTER L'AFFICHAGE 👇
      user: {
        select: {
          pseudo: true,
        },
      },
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

  const userPointsMap = new Map<
    number,
    { pseudo: string; points: number }
  >();

  for (const choice of choices) {
    const userId = choice.user_id;
    const pseudo = choice.user?.pseudo ?? "Anonyme";
    
    const ratings = choice.player.player_rate.map((r) => r.rate);
    const total = ratings.reduce((sum, r) => sum + r, 0);

    const current = userPointsMap.get(userId);
    if (current) {
      current.points += total;
    } else {
      userPointsMap.set(userId, { pseudo, points: total });
    }
  }

  return Array.from(userPointsMap.entries())
    .map(([userId, data]) => ({
      userId,
      pseudo: data.pseudo, // Le pseudo est bien renvoyé au dashboard !
      points: data.points,
    }))
    .sort((a, b) => b.points - a.points);
}

// ============================================================
// CLASSEMENT SAISON (Basé sur pt_lfb et pt_lf2)
// ============================================================

export async function getTotalRanking(
  leagueId: number,
  minWeek: number, 
  maxWeek: number
) {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      pseudo: true,
      pt_lfb: true,
      pt_lf2: true,
    },
  });

  return users
    .map((user) => {
      // id 1 = LFB, id 2 = LF2
      const points = leagueId === 1 ? (user.pt_lfb ?? 0) : (user.pt_lf2 ?? 0);

      return {
        userId: user.id,
        pseudo: user.pseudo || "Anonyme",
        points: points,
      };
    })
    .sort((a, b) => b.points - a.points);
}
// export async function getTotalRanking(leagueId: number) {
//   const choices = await prisma.choice.findMany({
//     where: {
//       week: {
//         league_id: leagueId,
//       },
//     },
//     select: {
//       user_id: true,
//       player: {
//         select: {
//           player_rate: {
//             where: {
//               week: {
//                 league_id: leagueId,
//               },
//             },
//             select: {
//               rate: true,
//             },
//           },
//         },
//       },
//     },
//   });

//   const userPointsMap = new Map<number, number>();

//   for (const choice of choices) {
//     const userId = choice.user_id;
//     const ratings = choice.player.player_rate.map(r => r.rate);
//     const total = ratings.reduce((sum, r) => sum + r, 0);
//     userPointsMap.set(userId, (userPointsMap.get(userId) ?? 0) + total);
//   }

//   const ranking = Array.from(userPointsMap.entries())
//     .map(([userId, points]) => ({ userId, points }))
//     .sort((a, b) => b.points - a.points);

//   return ranking;
// }
