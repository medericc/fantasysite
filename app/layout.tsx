// app/layout.tsx
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "First Pick - Stats et Classements Basket LFB & LF2",
  description:
    "First Pick, le média basket qui analyse les saisons LFB et LF2 : All-Stars, équipes de l'année et meilleurs ratings grâce à notre intelligence artificielle.",
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
      "Découvrez les All-Stars, les équipes de l'année et les meilleurs ratings des championnats LFB et LF2 avec First Pick.",
    url: "https://firstpick.fr", // 👉 mets ton vrai domaine ici
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
      "Toutes les stats LFB & LF2 : All-Stars, First Team, et ratings IA par First Pick.",
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
        <footer className="bg-slate-100 dark:bg-slate-800 py-6 mt-12 border-t border-slate-200 dark:border-slate-700">
          <div className="container mx-auto text-center text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} First Pick – Média basket LFB & LF2
          </div>
        </footer>
      </body>
    </html>
  )
}
