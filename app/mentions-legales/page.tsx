import type { Metadata } from "next"
import { 
  FileText, 
  Shield, 
  Mail, 
  Globe, 
  Building, 
  Copyright,
  AlertCircle,
  Lock
} from 'lucide-react'
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mentions légales – First Pick",
  description: "Mentions légales du site First Pick, média indépendant dédié au basket féminin.",
}

export default function MentionsLegalesPage() {
  const legalSections = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Éditeur du site",
      items: [
        { label: "Nom du site", value: "First Pick" },
        { label: "Activité", value: "Média indépendant - Analyse sportive" },
        { label: "SIRET", value: "En cours d'immatriculation" },
        { label: "Responsable de publication", value: "First Pick" }
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Hébergement",
      items: [
        { label: "Hébergeur", value: "Vercel Inc." },
        { label: "Adresse", value: "340 S Lemon Ave #4133, Walnut, CA 91789" },
        { label: "Site web", value: "vercel.com" },
        { label: "Localisation", value: "États-Unis" }
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact",
      items: [
        { label: "Email", value: "firstpick46@gmail.com" },
         { label: "instagram", value: "firstpickw" },
       
        { label: "Réponse", value: "Sous 72 heures ouvrées généralement" },
        { label: "Support", value: "Instagram ou par email" }
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Protection des données",
      items: [
        { label: "Données collectées", value: "Statistiques anonymes" },
        { label: "Cookies", value: "Analytiques uniquement" },
        { label: "RGPD", value: "Conforme" },
        { label: "Durée de conservation", value: "12 mois" }
      ]
    }
  ]

  const importantNotices = [
    {
      icon: <Copyright className="w-5 h-5" />,
      title: "Propriété intellectuelle",
      content: "Tous les contenus (textes, images, graphiques, algorithmes) présents sur le site sont la propriété exclusive de First Pick. Toute reproduction, distribution ou modification sans autorisation préalable écrite est strictement interdite."
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Limitation de responsabilité",
      content: "Les données publiées sont fournies à titre informatif et analytique. First Pick ne garantit pas l'exactitude absolue des informations et décline toute responsabilité quant aux décisions prises sur la base de ces données."
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Protection des données personnelles",
      content: "Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à l'adresse email indiquée."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/5 via-transparent to-slate-700/5 pointer-events-none" />
        <div className="container relative mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
      <Link
  href="/"
  aria-label="Retour à l'accueil First Pick"
  className="inline-block relative z-10 transition-transform duration-200 hover:scale-105"
> <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 mb-6">
            
              <FileText className="w-8 h-8 text-white" />
            </div></Link>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900 mb-4">
              Mentions Légales
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Informations légales et conditions d'utilisation du site First Pick
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 pb-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Informations légales
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full mt-2"></div>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Le site <strong className="text-slate-900 dark:text-white">First Pick</strong> est un média indépendant à vocation informative et analytique, dédié au basket féminin français. Les données publiées sont fournies à titre indicatif et analytique.
            </p>
          </div>
        </div>

        {/* Grid des informations légales */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalSections.map((section, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-slate-700/10 to-slate-900/10">
                    <div className="text-slate-700 dark:text-slate-300">
                      {section.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {section.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="border-b border-slate-100 dark:border-slate-700 last:border-0 pb-3 last:pb-0">
                      <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                        {item.label}
                      </div>
                      <div className="text-slate-800 dark:text-slate-200 font-semibold">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notices importantes */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Informations importantes
            </h2>
            
            <div className="space-y-6">
              {importantNotices.map((notice, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-slate-700/10 to-slate-900/10 flex-shrink-0">
                      <div className="text-slate-700 dark:text-slate-300">
                        {notice.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {notice.title}
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {notice.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dernière mise à jour */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-slate-700/10 to-slate-900/10 mb-4">
                <FileText className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Dernière mise à jour
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Ces mentions légales ont été mises à jour le 05 janvier 2026
              </p>
              <div className="text-sm text-slate-500 dark:text-slate-500">
                <p>
                  First Pick se réserve le droit de modifier ces mentions légales à tout moment.
                  Nous vous invitons à consulter régulièrement cette page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}