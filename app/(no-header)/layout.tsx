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
        <div className="max-w-6xl mx-auto px-4 py-8">
          <nav className="mb-6">
            <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm">
              {[
                  { href: "/politique-cookies", label: "Cookies" },
               
                { href: "/politique-confidentialite", label: "Confidentialite" },
               
                { href: "/methodologie", label: "Méthodologie" },
                { href: "/contact", label: "Contact" },
                { href: "/mentions-legales", label: "Mentions légales" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} First Pick — Média basket LFB & LF2
          </div>
        </div>
      </footer>

      <Analytics />
    </>
  )
}
