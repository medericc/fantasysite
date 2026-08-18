export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getCurrentUserId } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    // ==============================
    // Vérification admin
    // ==============================

    const userId = await getCurrentUserId();

    if (!userId) {
      return NextResponse.json(
        { error: "Non authentifié" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        roles: true,
      },
    });

    let roles: string[] = [];

    try {
      roles =
        typeof user?.roles === "string"
          ? JSON.parse(user.roles)
          : [];
    } catch {
      roles = [];
    }

    if (!roles.includes("admin")) {
      return NextResponse.json(
        { error: "Non autorisé" },
        { status: 403 }
      );
    }

    // ==============================
    // Paramètres
    // ==============================

    const body = await request.json();

    const playerId = Number(body.playerId);
    const weekId = Number(body.weekId);
    const rate = Number(body.rate);

    if (
      !Number.isInteger(playerId) ||
      !Number.isInteger(weekId) ||
      !Number.isFinite(rate)
    ) {
      return NextResponse.json(
        { error: "Paramètres invalides" },
        { status: 400 }
      );
    }

    // ==============================
    // Sauvegarde de la note
    // ==============================

    const playerRate = await prisma.player_rate.upsert({
      where: {
        player_id_week_id: {
          player_id: playerId,
          week_id: weekId,
        },
      },

      update: {
        rate,
      },

      create: {
        player_id: playerId,
        week_id: weekId,
        rate,
      },
    });

    // ==============================
    // Mise à jour des choices
    // ==============================

    await prisma.choice.updateMany({
      where: {
        player_id: playerId,
        week_id: weekId,
      },
      data: {
        points: rate,
      },
    });

    // ==============================
    // Recalcul des points utilisateurs
    // ==============================

    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
      },
    });

    for (const user of allUsers) {
      // Semaines 1 -> 22
      const firstHalf = await prisma.choice.aggregate({
        where: {
          user_id: user.id,
          week_id: {
            gte: 1,
            lte: 22,
          },
        },
        _sum: {
          points: true,
        },
      });

      // Semaines 23 -> 48
      const secondHalf = await prisma.choice.aggregate({
        where: {
          user_id: user.id,
          week_id: {
            gte: 23,
            lte: 48,
          },
        },
        _sum: {
          points: true,
        },
      });

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          pt_lfb: firstHalf._sum.points ?? 0,
          pt_lf2: secondHalf._sum.points ?? 0,
        },
      });
    }

    return NextResponse.json({
      success: true,
      rate: playerRate.rate,
    });

  } catch (error) {
    console.error(
      "Erreur /api/admin/update-player-rate:",
      error
    );

    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}