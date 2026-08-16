export const runtime = "nodejs";
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ clerkId: string }> } 
) {
const { clerkId } = await params;

  const user = await prisma.user.findUnique({
    where: { clerk_id: clerkId },
    select: { pseudo: true },
  });

  if (!user) {
    return NextResponse.json({ pseudo: null }, { status: 404 });
  }

  return NextResponse.json(user);
}