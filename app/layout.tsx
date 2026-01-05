// app/layout.tsx
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Stats et Classements Basket LFB & LF2",
  description:
     "First Pick, le média spécialisé basket féminin : analyse des saisons LFB et LF2, classements, notes générées par notre modèle d'intelligence artificielle, sélections All-Stars et équipes de l'année.",
  keywords: [
    "basket",
    "LFB",
    "LF2",
    "stats basket",
    "all-stars",
    "équipes de l'année",
    "classements",
    "first pick",
  ],
  authors: [{ name: "First Pick" }],
  openGraph: {
    title: "First Pick - Stats et Classements Basket LFB & LF2",
    description:
      "Découvrez les meilleurs ratings des championnats LFB et LF2, les All-Stars et les équipes de l'année avec First Pick.",
    url: "https://lfbfantasy.com", // 👉 mets ton vrai domaine ici
    siteName: "First Pick",
    images: [
      {
        url: "/og-image.jpg", // 👉 ajoute une image OG dans /public
        width: 1200,
        height: 630,
        alt: "First Pick - Média Basket",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "First Pick - Stats et Classements Basket",
    description:
      "Toutes les stats LFB & LF2 : ratings IA, All-Stars et First Team par First Pick.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-slate-900`}
      >
        {/* Header bandeau */}
        <header className="w-full bg-yellow-600 py-4 shadow-md">
          <div className="container mx-auto text-center">
            <h1 className="text-xl md:text-3xl font-bold text-white tracking-wide">
              RÉCOMPENSES FIRST PICK
            </h1>
          </div>
        </header>

        {/* Contenu principal */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-12">
  <div className="max-w-6xl mx-auto px-4 py-8">

    {/* Navigation */}
    <nav className="mb-6">
      <ul className="
        flex flex-col
        sm:flex-row
        justify-center
        items-center
        gap-4 sm:gap-6
        text-sm
      ">
        {[
          { href: "/about", label: "À propos" },
          { href: "/methodologie", label: "Méthodologie" },
          { href: "/contact", label: "Contact" },
          { href: "/mentions-legales", label: "Mentions légales" },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="
                text-slate-600 dark:text-slate-400
                hover:text-yellow-600 dark:hover:text-yellow-500
                transition-colors
                font-medium
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    {/* Copyright */}
    <div className="
      text-center
      text-xs sm:text-sm
      text-slate-500 dark:text-slate-400
    ">
      © {new Date().getFullYear()} First Pick — Média basket LFB & LF2
    </div>

  </div>
</footer>

        <Analytics />
       

      </body>
    </html>
  )
}
