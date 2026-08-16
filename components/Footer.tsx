'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-2 px-6 py-8 border-t">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <Image src="/lololom.png" alt="Logo" width={50} height={50} />
      </div>

      {/* Liens */}
      <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
        <Link href="/privacy" className="hover:underline text-gray-800">
          <span className="sm:inline hidden">Politique de confidentialité</span>
          <span className="inline sm:hidden">Politique</span>
        </Link>

        <Link href="/terms" className="hover:underline text-gray-800">
          <span className="sm:inline hidden">Conditions d’utilisation</span>
          <span className="inline sm:hidden">Conditions</span>
        </Link>

        <Link href="/legal" className="hover:underline text-gray-800">
          <span className="sm:inline hidden">Mentions légales</span>
          <span className="inline sm:hidden">Mentions</span>
        </Link>

        <a
          href="https://instagram.com/firstpickbasket"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-gray-800"
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
