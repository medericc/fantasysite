// app/(no-header)/layout.tsx
import { Analytics } from "@vercel/analytics/next"

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
