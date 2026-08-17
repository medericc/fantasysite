import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fantasy League LFB | Basket Féminin",
  description:
    "La première Fantasy League dédiée au basket féminin français (LFB). Compose ton équipe, suis les performances et domine le classement !",
  keywords: [
    "Fantasy League",
    "Basket Féminin",
    "LFB",
    "Basketball France",
    "Statistiques",
    "Jeu en ligne",
  ],
  authors: [{ name: "Fantasy LFB" }],
  creator: "Fantasy LFB",
  openGraph: {
    title: "Fantasy League LFB | Basket Féminin",
    description:
      "Participe à la première Fantasy League sur le basket féminin français (LFB) ! Sélectionne tes joueuses, gagne des points et défie tes amis.",
    url: "www.lfbfantasy.com",
    siteName: "Fantasy LFB",
    images: [
      {
        url: "https://www.lfbfantasy.comm/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fantasy League LFB",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fantasy League LFB | Basket Féminin",
    description:
      "La première Fantasy League sur le basket féminin français (LFB) ! Compose ton équipe et suis tes stats en direct.",
    images: ["https://www.lfbfantasy.com/og-image.jpg"],
    creator: "@firstpcikw",
  },
  icons: {
    icon: "/icons/favicon-32x32.png",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      signInUrl="/fantasy/sign-in"
      signUpUrl="/fantasy/sign-up"
      signInFallbackRedirectUrl="/fantasy"
      signUpFallbackRedirectUrl="/fantasy"
    >
      <html lang="fr">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <CookieBanner />
           <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
