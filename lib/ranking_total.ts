// lib/ranking_total.ts

export const runtime = "nodejs";

import { prisma } from "@/lib/prisma";


// ============================================================
// CLASSEMENT SEMAINE
// ============================================================

export async function getWeeklyRanking(
  leagueId: number,
  weekId: number
) {
  const choices = await prisma.choice.findMany({
    where: {
      week_id: weekId,
      week: {
        league_id: leagueId,
      },
    },

    select: {
      user_id: true,
      week_id: true,

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
                week_id: true,
              rate: true,
            },
          },
        },
      },
    },
  });

  const userPointsMap = new Map<
    number,
    {
      pseudo: string;
      points: number;
    }
  >();

  for (const choice of choices) {
    const userId = choice.user_id;
    const pseudo = choice.user?.pseudo ?? "Anonyme";

    const total = choice.player.player_rate.reduce(
      (sum, rate) => sum + rate.rate,
      0
    );

    const current = userPointsMap.get(userId);

    if (current) {
      current.points += total;
    } else {
      userPointsMap.set(userId, {
        pseudo,
        points: total,
      });
    }
  }

  return Array.from(userPointsMap.entries())
    .map(([userId, data]) => ({
      userId,
      pseudo: data.pseudo,
      points: data.points,
    }))
    .sort((a, b) => b.points - a.points);
}


// ============================================================
// CLASSEMENT SAISON
//
// LFB : semaines 1 → 22
// LF2 : semaines 23 → 48
// ============================================================

export async function getTotalRanking(leagueId: number) {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      pseudo: true,
      pt_lfb: true,
      pt_lf2: true,
    },
  });

  return users
    .map((user) => ({
      userId: user.id,
      pseudo: user.pseudo ?? "Anonyme",
      points: leagueId === 1 ? user.pt_lfb : user.pt_lf2,
    }))
    .sort((a, b) => b.points - a.points);
}




// export async function getTotalRanking(
//   leagueId: number,
//   minWeek: number,
//   maxWeek: number
// ) {
//   // On récupère toutes les semaines de la ligue
//   const weeks = await prisma.week.findMany({
//     where: {
//       league_id: leagueId,
//     },

//     select: {
//       id: true,
//       name: true,
//     },

//     orderBy: {
//       id: "asc",
//     },
//   });

//   // ----------------------------------------------------------
//   // On ne garde que la partie de saison voulue
//   // ----------------------------------------------------------

//   const selectedWeeks = weeks.filter((week) => {
//     const weekNumber = Number(
//       week.name.replace(/\D/g, "")
//     );

//     return (
//       weekNumber >= minWeek &&
//       weekNumber <= maxWeek
//     );
//   });

//   if (selectedWeeks.length === 0) {
//     return [];
//   }

//   const weekIds = selectedWeeks.map(
//     (week) => week.id
//   );

//   // ----------------------------------------------------------
//   // Toutes les choices des semaines sélectionnées
//   // ----------------------------------------------------------

//   const choices = await prisma.choice.findMany({
//     where: {
//       week_id: {
//         in: weekIds,
//       },

//       week: {
//         league_id: leagueId,
//       },
//     },

//     select: {
//       user_id: true,
//       week_id: true,

//       user: {
//         select: {
//           pseudo: true,
//         },
//       },

//       player: {
//         select: {
//           player_rate: {
//             where: {
//               week_id: {
//                 in: weekIds,
//               },
//             },

//             select: {
//               week_id: true,
//               rate: true,
//             },
//           },
//         },
//       },
//     },
//   });

//   const userPointsMap = new Map<
//     number,
//     {
//       pseudo: string;
//       points: number;
//     }
//   >();

//   // ----------------------------------------------------------
//   // Calcul
//   // ----------------------------------------------------------

//   for (const choice of choices) {
//     const userId = choice.user_id;
//     const pseudo = choice.user?.pseudo ?? "Anonyme";

//     // On prend uniquement les rates de la semaine
//     // correspondant à cette choice.
//     const rates = choice.player.player_rate.filter(
//       (rate) => rate.week_id === choice.week_id
//     );

//     const total = rates.reduce(
//       (sum, rate) => sum + rate.rate,
//       0
//     );

//     const current = userPointsMap.get(userId);

//     if (current) {
//       current.points += total;
//     } else {
//       userPointsMap.set(userId, {
//         pseudo,
//         points: total,
//       });
//     }
//   }

//   return Array.from(userPointsMap.entries())
//     .map(([userId, data]) => ({
//       userId,
//       pseudo: data.pseudo,
//       points: data.points,
//     }))
//     .sort((a, b) => b.points - a.points);
// }