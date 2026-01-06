import type { Metadata } from "next"
import { 
  Target, 
  Brain, 
  Shield, 
  Trophy, 
  Star, 
  TrendingUp, 
  Users, 
  Eye, 
  BarChart3,
  Heart
} from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "À propos de First Pick – Analyse & Classements Basket Féminin",
  description:
    "First Pick est un média indépendant dédié au basket féminin. Classements LFB & LF2, analyses avancées et évaluations générées par intelligence artificielle.",
  keywords: [
    "basket féminin",
    "LFB",
    "LF2",
    "classement basket",
  
    "all star",
    "intelligence artificielle sport",
    "First Pick",
  ],
}

export default function AboutPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "IA Avancée",
      description: "Modèle propriétaire d'intelligence artificielle pour l'analyse des performances"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Précision",
      description: "Évaluations basées sur des données objectives et vérifiables"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Indépendance",
      description: "Analyse libre de toute influence externe ou partisane"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparence",
      description: "Méthodologie claire et accessible à tous"
    }
  ]

  const stats = [
    { value: "2", label: "Championnats analysés", icon: <Trophy className="w-5 h-5" /> },
    { value: "500+", label: "Joueuses suivies", icon: <Users className="w-5 h-5" /> },
    { value: "100%", label: "Couverture IA", icon: <Brain className="w-5 h-5" /> },
    { value: "24/7", label: "Mises à jour", icon: <TrendingUp className="w-5 h-5" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 via-transparent to-amber-500/5" />
        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
          <Link
  href="/"
  aria-label="Retour à l'accueil First Pick"
  className="inline-block relative z-10 transition-transform duration-200 hover:scale-105"
>     <div className="inline-flex items-center justify-center p-4 rounded-2xl  mb-6">
  <Image
    src="/first.png"
    alt="First Pick logo"
    width={120}
    height={120}
    className="object-contain"
    priority
  />
</div> </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-500 mb-4">
              À propos de First Pick
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Redéfinir l'analyse du basket féminin par l'innovation et la transparence
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 pb-20">
        {/* Stats Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center p-2 rounded-lg bg-gradient-to-r from-yellow-600/10 to-amber-500/10 mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-600 to-amber-500">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Notre mission
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
              <p className="leading-relaxed">
                <strong className="text-slate-900 dark:text-white">First Pick</strong> est un média indépendant spécialisé dans l'analyse du basket féminin français. Notre mission est de proposer une lecture <span className="font-semibold text-yellow-600">moderne, objective et transparente</span> des performances individuelles et collectives en LFB et LF2.
              </p>

              <p className="leading-relaxed">
                À travers des classements exclusifs, des distinctions All-Stars et des équipes de l'année, First Pick met en lumière les joueuses les plus performantes en s'appuyant sur les <span className="font-semibold text-amber-600">données plutôt que sur la simple subjectivité</span>.
              </p>
            </div>
          </div>

          {/* Why Section */}
          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-600 to-amber-500">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Pourquoi First Pick ?
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-full"></div>
              </div>
            </div>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              First Pick est né pour valoriser la performance réelle, comparer les saisons et offrir un outil de référence aux <span className="font-semibold text-yellow-600">passionnés et acteurs du basket féminin</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-yellow-600/10 to-amber-500/10 mb-4">
                    <div className="text-yellow-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology Section */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-600 to-amber-500">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Une méthodologie innovante
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
              <div className="bg-gradient-to-r from-yellow-600/5 to-amber-500/5 rounded-xl p-6 border border-yellow-500/20">
                <p className="leading-relaxed">
                  Les notes First Pick sont générées à partir d'un modèle d'intelligence artificielle développé en interne. Celui-ci analyse de multiples indicateurs : <span className="font-semibold text-yellow-600">statistiques individuelles, régularité, impact sur le résultat, physionomie des rencontres et influence collective</span>.
                </p>
              </div>

              <p className="leading-relaxed">
                Contrairement aux évaluations classiques, chaque performance est replacée dans son contexte. Les classements sont mis à jour régulièrement au fil de la saison pour refléter l'évolution des performances.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-600 to-amber-500">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Nos valeurs fondamentales
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-full"></div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">First Pick est un projet indépendant.</strong> Les classements et analyses ne sont influencés par aucun club, agent ou partenaire. Notre objectif est de proposer une information <span className="font-semibold text-yellow-600">fiable, compréhensible et accessible à tous</span>.
              </p>
              
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">Objectivité</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Analyse sans biais</div>
                  </div>
                  <div className="hidden sm:block w-1 h-12 bg-gradient-to-b from-yellow-600 to-amber-500"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 mb-1">Innovation</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Technologie IA avancée</div>
                  </div>
                  <div className="hidden sm:block w-1 h-12 bg-gradient-to-b from-yellow-600 to-amber-500"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-700 mb-1">Transparence</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Méthodologie ouverte</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}