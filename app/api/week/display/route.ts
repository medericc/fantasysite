// app/api/week/display/route.ts

export const runtime = "nodejs";

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const weekId = Number(searchParams.get('weekId'));

    if (isNaN(weekId)) {
      return NextResponse.json(
        { error: 'Invalid weekId' },
        { status: 400 }
      );
    }

    const week = await prisma.week.findUnique({
      where: {
        id: weekId,
      },
      select: {
        id: true,
        league_id: true,
      },
    });

    if (!week) {
      return NextResponse.json(
        { error: 'Week not found' },
        { status: 404 }
      );
    }

    // Récupérer toutes les semaines de cette ligue
    // pour déterminer son numéro relatif
    const weeks = await prisma.week.findMany({
      where: {
        league_id: week.league_id,
      },
      orderBy: {
        id: 'asc',
      },
      select: {
        id: true,
      },
    });

    const index = weeks.findIndex(w => w.id === week.id);

    return NextResponse.json({
      displayId: index + 1,
      leagueId: week.league_id,
    });

  } catch (error) {
    console.error('Error in /api/week/display:', error);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}