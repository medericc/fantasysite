// app/api/week/list/route.ts

export const runtime = "nodejs";

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {

    
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json(
        { error: 'Missing slug' },
        { status: 400 }
      );
    }

    const leagueId = slug.toLowerCase() === 'lf2' ? 2 : 1;

    const weeks = await prisma.week.findMany({
      where: {
        league_id: leagueId,
      },
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
console.log(
  "SLUG:",
  slug,
  "LEAGUE:",
  leagueId,
  "WEEKS:",
  weeks
);
    // Numéro de journée propre à chaque ligue
    const formattedWeeks = weeks.map((week, index) => ({
      id: week.id,
      name: week.name,
      displayId: index + 1,
    }));

    return NextResponse.json(formattedWeeks);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}