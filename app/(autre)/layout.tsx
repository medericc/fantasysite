// app/(no-header)/layout.tsx
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LiveStats LFB & LF2 – FIRST PICK',
  description:
    'Retrouve toutes les actions détaillées d’une joueuse LFB ou LF2 : tirs, fautes, réussites, score.',
alternates: {
    canonical: 'https://www.lfbfantasy.com/livestats',
  },
}
export default function NoHeaderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="min-h-screen">{children}</main>

     

      <Analytics />
    </>
  )
}
