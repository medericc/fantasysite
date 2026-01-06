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

      <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} First Pick — Média basket LFB & LF2
        </div>
      </footer>

      <Analytics />
    </>
  )
}
