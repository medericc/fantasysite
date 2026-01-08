import type { Metadata } from "next"
import { 
  Brain, 
  BarChart3, 
  Cpu, 
  TrendingUp,
  Target,
  Layers,
  Database,
  RefreshCw,
  PieChart,
  Zap,
  Shield,
  Sparkles
} from 'lucide-react'
import Link from "next/link"

export const metadata: Metadata = {
  title: "Méthodologie First Pick – Intelligence Artificielle & Basket Féminin",
  description:
    "Découvrez la méthodologie First Pick : un modèle d'intelligence artificielle dédié à l'analyse des performances en basket féminin (LFB & LF2).",
}

export default function MethodologiePage() {
  const dataPoints = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Production offensive",
      details: ["Points marqués", "Prise de décision", "Création de jeu", "Efficacité au tir"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Impact défensif",
      details: ["Interceptions", "Contres", "Perturbation", "Rebonds défensifs"]
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Contribution collective",
      details: ["Passes décisives", "Usage rate", "Minutes de jeu", "Perte de Balle"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Régularité & Clutch",
      details: ["Performance sur la saison", "Moments décisifs", "Présence terrain", "Physionomie"]
    }
  ]

  const aiFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Apprentissage automatique",
      description: "Le modèle s'améliore continuellement avec chaque nouvelle donnée analysée"
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Pondération dynamique",
      description: "Les statistiques sont pondérées selon le même modèle"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Analyse contextuelle",
      description: "Évaluation des performances en fonction de la physionomie de chaque rencontre"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Big Data",
      description: "Analyse de milliers de données pour chaque joueuse et chaque match"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5" />
        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
              <Link
              href="/"
              aria-label="Retour à l'accueil First Pick"
              className="inline-block relative z-10 transition-transform duration-200 hover:scale-105"
            > <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div> </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Notre Méthodologie
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Comment l'intelligence artificielle redéfinit l'analyse du basket féminin
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 pb-20">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Notre approche scientifique
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>
            </div>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Les classements et distinctions <strong className="text-slate-900 dark:text-white">First Pick</strong> reposent sur une méthodologie d'analyse avancée combinant données statistiques et intelligence artificielle. L'objectif est d'évaluer la <span className="font-semibold text-blue-600">performance réelle</span> des joueuses de basket féminin en LFB et LF2.
            </p>

            <div className="bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl p-6 border border-blue-500/20">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Notre modèle analyse non seulement ce qui est mesuré, mais aussi <span className="font-semibold text-purple-600">ce qui compte réellement</span> pour l'issue d'un match et la dynamique d'une saison.
              </p>
            </div>
          </div>
        </div>

        {/* Données analysées */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 mb-4">
              <Database className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Données analysées
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Le modèle prend en compte de nombreux indicateurs, chaque donnée étant replacée dans le contexte du match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-blue-600">
                    {point.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {point.title}
                </h3>
                <ul className="space-y-2">
                  {point.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Intelligence Artificielle */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Intelligence Artificielle & Pondération
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>
            </div>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              L'intelligence artificielle First Pick applique des pondérations dynamiques selon le rôle, le temps de jeu et la physionomie du match. Cela permet d'éviter les biais liés au simple volume statistique.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                      <div className="text-blue-600">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Classements et mises à jour */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Classements et mises à jour
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl border border-blue-500/20">
                <TrendingUp className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Mises à jour en temps réel
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Les classements sont mis à jour régulièrement tout au long de la saison. 
                    Les calculs s'activent dès lors qu'un temps de jeu de cinq minutes est atteint 
                    pour traduire l'apport des joueuses.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-5 text-center border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Analyse continue</div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-5 text-center border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Réel</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Temps réel des matchs</div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-5 text-center border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Contextuel</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Adapté au contexte</div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Notre engagement de transparence
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nous croyons en une analyse ouverte et compréhensible. Toutes nos méthodes sont documentées 
                  et nos résultats sont vérifiables. L'objectif n'est pas de remplacer l'analyse humaine, 
                  mais de la compléter par des insights objectifs et quantifiables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}