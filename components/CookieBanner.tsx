'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag: (...args: [string, string | Date, Record<string, unknown>?]) => void;
  }
}

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookies-accepted');
    if (consent === null) {
      setShow(true);
    } else if (consent === 'true') {
      loadAnalytics();
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    loadAnalytics();
    setShow(false);
  };

  const refuseCookies = () => {
    localStorage.setItem('cookies-accepted', 'false');
    setShow(false);
  };

  const loadAnalytics = () => {
    if (typeof window !== 'undefined' && !window.dataLayer) {
      window.dataLayer = [];

      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // ← remplace par ton ID
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.gtag = function (...args) {
          window.dataLayer.push({ gtag: args });
        };

        window.gtag('js', new Date());
        window.gtag('config', 'G-XXXXXXXXXX'); // ← remplace ici aussi
      };
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white px-6 py-4 z-50 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-sm text-center sm:text-left">
        Ce site utilise des cookies pour améliorer l’expérience utilisateur et mesurer l’audience.{" "}
        <a href="/politique-confidentialite" className="underline text-blue-400 hover:text-blue-300">
          En savoir plus
        </a>.
      </p>
      <div className="flex gap-2">
        <button
          onClick={refuseCookies}
          className="bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Refuser
        </button>
        <button
          onClick={acceptCookies}
          className="bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
