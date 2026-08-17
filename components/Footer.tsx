'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-2 px-6 py-8 border-t">
      {/* Bouton retour au site */}
      <div className="flex justify-center mb-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-700 hover:to-yellow-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="relative">
            Retour au site
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
      </div>

      {/* Liens */}
      <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
        <Link href="/privacy" className="hover:underline text-gray-800 hover:text-yellow-600 transition-colors duration-200">
          <span className="sm:inline hidden">Politique de confidentialité</span>
          <span className="inline sm:hidden">Politique</span>
        </Link>

        <Link href="/terms" className="hover:underline text-gray-800 hover:text-yellow-600 transition-colors duration-200">
          <span className="sm:inline hidden">Conditions d'utilisation</span>
          <span className="inline sm:hidden">Conditions</span>
        </Link>

        <Link href="/legal" className="hover:underline text-gray-800 hover:text-yellow-600 transition-colors duration-200">
          <span className="sm:inline hidden">Mentions légales</span>
          <span className="inline sm:hidden">Mentions</span>
        </Link>

        <a
          href="https://instagram.com/firstpickbasket"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-gray-800 hover:text-yellow-600 transition-colors duration-200"
        >
          <span className="sm:inline hidden">Contact Instagram</span>
          <span className="inline sm:hidden">Contact</span>
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} First Pick – Tous droits réservés.
      </p>
    </footer>
  );
}