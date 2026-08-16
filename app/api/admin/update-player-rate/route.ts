// app/api/admin/update-player-rate/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  try {
    const { playerId, weekId, rate } = await request.json();

    if (!playerId || !weekId || rate === undefined) {
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }

    const parsedWeekId = parseInt(weekId, 10);
    if (isNaN(parsedWeekId)) {
      return NextResponse.json({ error: "Invalid weekId" }, { status: 400 });
    }

    // 1️⃣ Met à jour ou crée la note du joueur pour la semaine
    await prisma.player_rate.upsert({
      where: { player_id_week_id: { player_id: playerId, week_id: parsedWeekId } },
      update: { rate },
      create: { player_id: playerId, week_id: parsedWeekId, rate },
    });

    // 2️⃣ Met à jour toutes les lignes choice correspondantes
    await prisma.choice.updateMany({
      where: { player_id: playerId, week_id: parsedWeekId },
      data: { points: rate },
    });

    // 3️⃣ Recalcule les points totaux pour tous les users
    const allUsers = await prisma.user.findMany({ select: { id: true } });

    for (const user of allUsers) {
      const totalPoints = await prisma.choice.aggregate({
        where: { user_id: user.id },
        _sum: { points: true },
      });

      await prisma.user.update({
        where: { id: user.id },
        data: { ptl_lfb: totalPoints._sum.points || 0 },
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur /api/admin/update-player-rate :", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
