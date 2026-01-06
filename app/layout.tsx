// app/layout.tsx
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import RegisterSW from "@/components/RegisterSW"

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
    "all star",
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
    url: "https://lfbfantasy.com",
    siteName: "First Pick",
    images: [
      {
        url: "/og-image.jpg",
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
       <head>
        {/* PWA */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#f59e0b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="First Pick W" />
    <link rel="manifest" href="/manifest.webmanifest" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-slate-900`}
      >
        <RegisterSW />
        {children}
      </body>
    </html>
  )
}
