'use client'

import { useState, useEffect } from 'react'
import Papa from 'papaparse'
import { motion, AnimatePresence } from 'framer-motion'
import {  Brain,
  History,
  HelpCircle,
  Calculator,
  RefreshCw, Trophy, Star, Award, TrendingUp, ChevronRight, Users, Target, Calendar } from 'lucide-react'
import { useRouter } from "next/navigation"
import { CANONICAL_YEAR } from "@/lib/season"

// ---- Types ----
type NotePlayer = { prenom: string; nom: string; equipe: string; note: string; ranking: string; place: number }
type AllStar = { prenom: string; nom: string; ligue: string; annee: string; equipe: string }
type FirstTeam = { prenom: string; nom: string; ligue: string; annee: string; rang: string }

type Category = 'notes' | 'allStars' | 'firstTeam'

export default function FirstPickStats({
  league,
  view,
  year,
}: {
  league: 'LFB' | 'LF2'
  view: Category
  year: string
}) {
  const router = useRouter()
const selectedLeague = league
const selectedCategory = view
const selectedYear = year


  // ⏳ loading reste en state normal
  const [isLoading, setIsLoading] = useState(true)

  const [lfbNotes, setLfbNotes] = useState<NotePlayer[]>([])
  const [lf2Notes, setLf2Notes] = useState<NotePlayer[]>([])
  const [allStars, setAllStars] = useState<AllStar[]>([])
  const [firstTeams, setFirstTeams] = useState<FirstTeam[]>([])

  // ---- Load CSVs once ----
  useEffect(() => {
    const loadData = async () => {
      try {
        Papa.parse('/lfb_notes.csv', {
          header: true,
          download: true,
          complete: (result) => {
           const rows = (result.data as any[])
  .filter(r => r.forename && r.name && r.rating)
  .map(r => ({
    prenom: r.forename.trim(),
    nom: r.name.trim(),
    equipe: r.equipe ?? '',
    note: r.rating.replace(',', '.'),
    ranking: r.match ?? '',
    place: 0,
  }))

            setLfbNotes(rows)
          },
        })
        Papa.parse('/lf2_notes.csv', {
          header: true,
          download: true,
          complete: (result) => {
            const rows = (result.data as any[]).map(r => ({
              prenom: r.forename,
              nom: r.name,
              equipe: r.equipe,
              note: r.rating?.replace(',', '.') ?? '',
              ranking: r.match ?? '',
              place: 0
            }))
            setLf2Notes(rows)
          },
        })
        Papa.parse('/allstars.csv', {
          header: true,
          download: true,
          complete: (result) => {
            const rows = (result.data as any[]).map(r => ({
              prenom: r.prenom,
              nom: r.nom,
              ligue: r.ligue,
              annee: r.annee,
              equipe: r.equipe
            }))
            setAllStars(rows)
          },
        })
        Papa.parse('/firstteam.csv', {
          header: true,
          download: true,
          complete: (result) => {
            const rows = (result.data as any[]).map(r => ({
              prenom: r.prenom,
              nom: r.nom,
              ligue: r.ligue,
              annee: r.annee,
              rang: r.rang
            }))
            setFirstTeams(rows)
          },
        })
      } finally {
        setIsLoading(false)
      }
    }
    
    loadData()
  }, [])

  const updateURL = (params: {
  league?: 'LFB' | 'LF2'
  view?: Category
  year?: string
}) => {
  const nextLeague = params.league ?? selectedLeague
  const nextView = params.view ?? selectedCategory

  // ⭐ RÈGLE SEO
  const nextYear =
    params.year ??
    (params.view || params.league ? CANONICAL_YEAR : selectedYear)

  router.push(
    `/${nextLeague.toLowerCase()}/${nextView}/${nextYear}`,
    { scroll: false }
  )
}

  // ---- Filtering ----
  const currentNotes = selectedLeague === 'LFB' ? lfbNotes : lf2Notes
  const currentAllStars = allStars.filter(p => p.ligue === selectedLeague && p.annee === selectedYear)
  const currentFirstTeam = firstTeams.filter(p => p.ligue === selectedLeague && p.annee === selectedYear)
  
  const sortedNotes = [...currentNotes].sort(
  (a, b) => parseFloat(b.note) - parseFloat(a.note)
)
const topPlayer =
  sortedNotes.length > 0 && !isNaN(Number(sortedNotes[0].note))
    ? sortedNotes[0]
    : null

  // Années disponibles
  const availableYears = ['2023', '2024']
  
  const lfbAllStarCounts = allStars
    .filter(p => p.ligue === 'LFB')
    .reduce((acc, p) => {
      const key = `${p.prenom} ${p.nom}`
      acc[key] = (acc[key] || 0) + 1
      return acc
    }, {} as Record<string, number>)

  // Fonction pour obtenir la couleur du classement
  const getRankingColor = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-500 to-amber-400'
    if (rank === 2) return 'bg-gradient-to-r from-gray-400 to-gray-300'
    if (rank === 3) return 'bg-gradient-to-r from-amber-700 to-amber-600'
    return 'bg-gradient-to-r from-slate-700 to-slate-600'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Header avec effet gradient */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 via-transparent to-yellow-600/10 text-center" />
      <h1 className="text-3xl md:text-4xl font-bold mb-3 mt-4  sm:mb-4  md:mb-5  sm:mt-6  md:mt-8 text-center z-10 relative">
  {selectedCategory === 'notes' &&
    `Classement des meilleures joueuses ${selectedLeague} ${selectedYear}`}
  {selectedCategory === 'allStars' &&
    `All-Stars ${selectedLeague} ${selectedYear}`}
  {selectedCategory === 'firstTeam' &&
    `First Team ${selectedLeague} ${selectedYear}`}
</h1>

<p
  className="
    text-slate-600
    text-sm sm:text-base md:text-lg
    px-4 sm:px-6
    mx-auto
    text-center
    mt-4 sm:mt-0
    mb-6 sm:mb-2
    max-w-3xl
    lg:max-w-4xl
    xl:max-w-5xl
    2xl:max-w-6xl
  "
>
  Découvrez le classement First Pick des joueuses {selectedLeague} pour la saison {selectedYear},
  basé sur notre propre modèle d’intelligence artificielle.
</p>


<p
  className="
    text-slate-500
    hidden sm:block
    text-xs sm:text-sm md:text-base
    px-4 sm:px-6
    text-center
    mb-4 sm:mb-5 md:mb-6
  "
>
  {selectedCategory === 'notes' && topPlayer ? (
    <>
      Le classement est dominé par{" "}
      <span className="font-semibold text-slate-700 dark:text-slate-200">
        {topPlayer.prenom} {topPlayer.nom}
      </span>
      , meilleure note de la saison {selectedYear}.
    </>
  ) : (
    <>Notes mises à jour régulièrement après chaque journée.</>
  )}
</p>

      </div>

      <main className="container mx-auto px-4 pb-16">
        {/* Sélecteur de ligue - Design amélioré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-1 shadow-lg max-w-md mx-auto">
            <div className="flex gap-2">
              <button
                onClick={() => updateURL({ league: 'LFB' })}
                className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold ${
                  selectedLeague === 'LFB'
                    ? 'bg-gradient-to-r from-yellow-600 to-amber-500 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                }`}
              >
                <Trophy className="w-5 h-5" />
                LFB
              </button>
              <button
                onClick={() => updateURL({ league: 'LF2' })}
                className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold ${
                  selectedLeague === 'LF2'
                    ? 'bg-gradient-to-r from-yellow-600 to-amber-500 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                }`}
              >
                  <Trophy className="w-5 h-5" />
                LF2
              </button>
            </div>
          </div>
        </motion.div>

        {/* Navigation par catégories - Design moderne */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 md:mb-12"
        >
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => updateURL({ view: 'notes' })}
                className={`flex-1 py-4 px-4 rounded-xl transition-all duration-300 flex flex-col items-center gap-2 ${
                  selectedCategory === 'notes'
                    ? 'bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                }`}
              >
                <TrendingUp className="w-6 h-6" />
                <span className="font-semibold text-sm">Notes Saison</span>
              </button>
              <button
                onClick={() => updateURL({ view: 'allStars' })}
                className={`flex-1 py-4 px-4 rounded-xl transition-all duration-300 flex flex-col items-center gap-2 ${
                  selectedCategory === 'allStars'
                    ? 'bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                }`}
              >
                <Star className="w-6 h-6" />
                <span className="font-semibold text-sm">All-Stars</span>
              </button>
              <button
                onClick={() => updateURL({ view: 'firstTeam' })}
                className={`flex-1 py-4 px-4 rounded-xl transition-all duration-300 flex flex-col items-center gap-2 ${
                  selectedCategory === 'firstTeam'
                    ? 'bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                }`}
              >
                <Award className="w-6 h-6" />
                <span className="font-semibold text-sm">First Team</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Sélecteur d'année - Uniquement pour All-Stars et First Team */}
        <AnimatePresence>
          {(selectedCategory === 'allStars' || selectedCategory === 'firstTeam') && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 md:mb-12"
            >
              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-yellow-600" />
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200">
                    Sélectionnez l'année
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {(
                    selectedCategory === 'firstTeam'
                      ? availableYears
                      : (selectedLeague === 'LFB'
                          ? ['2022','2023','2024','2025']
                          : ['2023','2024','2025']
                        )
                  ).map((year) => (
                    <button
                      key={year}
                      onClick={() => updateURL({ year })}
                      className={`px-5 py-2 rounded-full transition-all duration-300 font-medium ${
                        selectedYear === year
                          ? 'bg-gradient-to-r from-yellow-600 to-amber-500 text-white shadow-md transform scale-105'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contenu principal */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
          </div>
        ) : (
          <motion.div
            key={`${selectedLeague}-${selectedCategory}-${selectedYear}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Notes Saison */}
            {selectedCategory === 'notes' && (
              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-500">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                        Classement des Notes
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300">
                        {selectedLeague} - Saison 2025/2026
                      </p>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
                        <tr>
                          <th className="text-left py-4 px-6 text-slate-100 font-semibold">#</th>
                          <th className="text-left py-4 px-6 text-slate-100 font-semibold">Joueuse</th>
                         <th className="text-left py-4 px-6 text-slate-100 font-semibold">Note</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                        {sortedNotes.map((p, idx) => {
                          const noteNum = Number(p.note)
                          let place = idx + 1
                          if (idx > 0) {
                            const prevNote = Number(sortedNotes[idx - 1].note)
                            if (noteNum === prevNote) {
                              place = (sortedNotes[idx - 1] as any).place
                            }
                          }
                          (sortedNotes[idx] as any).place = place

                          return (
                            <tr
                              key={idx}
                              className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors duration-200"
                            >
                              <td className="py-4 px-6">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${getRankingColor(place)}`}>
                                  {place}
                                </div>
                              </td>
                              <td className="py-4 px-6">
                                <div className="font-semibold text-slate-800 dark:text-white">
                                  {p.prenom} {p.nom}
                                </div>
                              </td>
                             
                              <td className="py-4 px-6">
                                <div className="inline-flex items-center gap-2">
                                  <div className={`px-3 py-1 rounded-full font-bold ${
                                    noteNum >= 8 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                                    noteNum >= 7 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                                    'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                                  }`}>
                                    {Number.isInteger(noteNum) ? noteNum : noteNum.toFixed(1)}
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-slate-400" />
                                </div>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* All-Stars */}
            {selectedCategory === 'allStars' && (
              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-500">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                        All-Stars {selectedYear}
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300">
                        Sélections All-Stars {selectedLeague}
                      </p>
                    </div>
                  </div>

                  {currentAllStars.length === 0 ? (
                    <div className="text-center py-12">
                      <Star className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-500 dark:text-slate-400">
                        Aucune sélection All-Stars pour cette saison
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentAllStars.map((p, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="group"
                        >
                          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-yellow-600 transition-colors">
                                  {p.prenom} {p.nom}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                                  {p.equipe}
                                </p>
                              </div>
                              <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-500">
                                <Star className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            {selectedLeague === 'LFB' && (
                              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                                <div className="text-sm text-slate-600 dark:text-slate-300">
                                  <span className="font-semibold">
                                    {lfbAllStarCounts[`${p.prenom} ${p.nom}`] || 0}
                                  </span> sélection{lfbAllStarCounts[`${p.prenom} ${p.nom}`] > 1 ? 's' : ''}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* First Team */}
            {selectedCategory === 'firstTeam' && (
              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-500">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                        First Team {selectedYear}
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300">
                        Meilleur cinq de la saison {selectedLeague}
                      </p>
                    </div>
                  </div>

                  {currentFirstTeam.length === 0 ? (
                    <div className="text-center py-12">
                      <Award className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-500 dark:text-slate-400">
                        Aucune sélection First Team pour cette saison
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentFirstTeam.map((p, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group"
                        >
                          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <h3 className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-amber-600 transition-colors">
                                  {p.prenom} {p.nom}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm">
                                  {selectedLeague} - {p.annee}
                                </p>
                              </div>
                              {p.rang && (
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg ${getRankingColor(parseInt(p.rang))}`}>
                                  {p.rang}
                                </div>
                              )}
                            </div>
                            <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                              <Award className="w-4 h-4 mr-2" />
                              <span>First Team Selection</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
{/* ===== TEXTE SEO ===== */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className=" mt-16 px-4"
>
  <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8">
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-yellow-600/10 to-amber-500/10 mb-4">
        <Trophy className="w-8 h-8 text-yellow-600" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
        Classements basket féminin {selectedLeague}
      </h2>
      <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-600 to-amber-500 text-white text-sm font-semibold">
        Saison {selectedYear}
      </div>
    </div>

    <div className="space-y-4 text-slate-600 dark:text-slate-300">
      <p className="leading-relaxed">
        First Pick propose des classements exclusifs des joueuses de {selectedLeague},
        basés sur un modèle d'intelligence artificielle combinant statistiques
        individuelles, performances collectives et impact réel sur le jeu.
      </p>

      <div className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-800/30 dark:to-slate-700/30 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
        <div className="flex items-start gap-3">
          <Brain className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
          <p className="leading-relaxed">
            Contrairement aux outils classiques, notre modèle d'IA évalue l'impact réel d'une performance 
            en fonction de la physionomie du match. Nous mesurons la contribution d'une joueuse 
            proportionnellement au volume global de la rencontre. L'objectif est simple : noter l'influence 
            directe sur le match, quel que soit le score final.
          </p>
        </div>
      </div>

      <p className="leading-relaxed">
        Les distinctions <span className="font-semibold text-yellow-600">All-Stars</span> et <span className="font-semibold text-amber-600">First Team</span> mettent en lumière les joueuses les plus
        performantes de la saison, offrant une vision claire des leaders
        du basket féminin français. Ce travail vise à valoriser la performance et à proposer
        une lecture moderne et transparente des championnats.
      </p>

      <p className="leading-relaxed font-medium text-slate-700 dark:text-slate-200">
        Consultez également les saisons précédentes pour suivre l'évolution des joueuses
        et comparer les performances d'une année sur l'autre.
      </p>
    </div>

    {/* Navigation des saisons */}
    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 ">
      <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4 flex items-center gap-2">
        <History className="w-5 h-5 text-yellow-600" />
        Autres saisons {selectedLeague}
      </h3>
      <div className="flex flex-wrap gap-2">
        {['2025']
          .filter(y => y !== selectedYear)
          .map((y) => (
            <a
              key={y}
              href={`/${selectedLeague.toLowerCase()}/${selectedCategory}/${y}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-amber-500 hover:text-white transition-all duration-300 group"
            >
              <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Saison {y}</span>
              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          ))}
      </div>
    </div>
  </div>
</motion.section>

<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className=" mt-8 px-4"
>
  <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl shadow-xl p-6 md:p-8">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-500">
        <HelpCircle className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
        Questions fréquentes
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-colors">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-3 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-yellow-600" />
            Comment sont calculées les notes ?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Les notes sont générées par notre modèle d'intelligence artificielle analysant 
            les statistiques individuelles, l'impact collectif et la régularité de chaque joueuse.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-colors">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-3 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-yellow-600" />
            Fréquence des mises à jour
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Les classements sont recalculés après chaque journée de championnat pour une 
            analyse toujours à jour des performances.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-colors">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-600" />
            All-Stars vs First Team
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Les All-Stars récompensent les meilleures joueuses de la mi-saison, 
            tandis que la First Team représente les cinq meilleures de la saison complète.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-colors">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-yellow-600" />
            Objectif de l'analyse
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Valoriser la performance individuelle dans son contexte collectif, 
            pour une vision plus juste du basketball féminin français.
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.section>

        {/* Stats en bas de page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {lfbNotes.length + lf2Notes.length}
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                Joueuses analysées
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                {allStars.length}
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                Sélections All-Stars
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-amber-700 mb-2">
                {firstTeams.length}
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                Nominations First Team
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}