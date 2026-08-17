// app/api/week/id/route.ts

export const runtime = "nodejs";

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const name = searchParams.get('name');
    const slug = searchParams.get('slug');

    if (!name || !slug) {
      return NextResponse.json(
        { error: 'Missing name or slug' },
        { status: 400 }
      );
    }

    const leagueId = slug.toLowerCase() === 'lf2' ? 2 : 1;

    const week = await prisma.week.findFirst({
      where: {
        name,
        league_id: leagueId,
      },
      select: {
        id: true,
      },
    });

    if (!week) {
      return NextResponse.json(
        { error: 'Week not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ id: week.id });

  } catch (error) {
    console.error('Error in /api/week/id:', error);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}