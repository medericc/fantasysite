"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const CONSENT_KEY = "firstpick-cookie-consent"
const GTM_ID = "GTM-MXF5G4KH"

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

function loadGTM() {
  if (typeof window === "undefined") return

  // Évite de charger GTM deux fois
  if (document.getElementById("firstpick-gtm")) return

  window.dataLayer = window.dataLayer || []

  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  })

  const script = document.createElement("script")
  script.id = "firstpick-gtm"
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`

  document.head.appendChild(script)
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)

    if (consent === "granted") {
      loadGTM()
    } else if (!consent) {
      setVisible(true)
    }
  }, [])

  const setConsent = (value: "granted" | "denied") => {
    localStorage.setItem(CONSENT_KEY, value)

    if (value === "granted") {
      loadGTM()
    }

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "cookie_consent",
      analytics_storage: value === "granted" ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    })

    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4"
      role="dialog"
      aria-label="Gestion des cookies"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-700 dark:bg-slate-900">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
              🍪 Votre confidentialité
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              First Pick utilise des cookies et traceurs afin d'assurer le
              fonctionnement du site et, avec votre accord, de mesurer son
              audience avec Google Analytics. Vous pouvez accepter ou refuser
              les cookies analytiques.
            </p>

            <Link
              href="/politique-cookies"
              className="mt-2 inline-block text-sm font-medium text-yellow-600 underline hover:no-underline dark:text-yellow-400"
            >
              En savoir plus sur les cookies
            </Link>
          </div>

          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => setConsent("denied")}
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Refuser
            </button>

            <button
              type="button"
              onClick={() => setConsent("granted")}
              className="rounded-xl bg-yellow-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-yellow-400"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}