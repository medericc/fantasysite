export const runtime = "nodejs";
import { prisma } from '@/lib/prisma';

/**
 * Crée ou met à jour la note d'un joueur pour une semaine donnée
 */
export async function upsertPlayerRate(playerId: number, weekId: number, newRate: number) {
  return prisma.player_rate.upsert({
    where: {
      player_id_week_id: { // clé composite générée par @@unique
        player_id: playerId,
        week_id: weekId,
      },
    },
    update: { rate: newRate },
    create: { player_id: playerId, week_id: weekId, rate: newRate },
  });
}