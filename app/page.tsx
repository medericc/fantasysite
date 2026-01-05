'use client'

import { useState, useEffect } from 'react'
import Papa from 'papaparse'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Star, Award, TrendingUp, ChevronRight, Users, Target, Calendar } from 'lucide-react'

// ---- Types ----
type NotePlayer = { prenom: string; nom: string; equipe: string; note: string; ranking: string; place: number }
type AllStar = { prenom: string; nom: string; ligue: string; annee: string; equipe: string }
type FirstTeam = { prenom: string; nom: string; ligue: string; annee: string; rang: string }

type Category = 'notes' | 'allStars' | 'firstTeam'

export default function FirstPickStats() {
  const [selectedLeague, setSelectedLeague] = useState<'LFB' | 'LF2'>('LFB')
  const [selectedCategory, setSelectedCategory] = useState<Category>('notes')
  const [selectedYear, setSelectedYear] = useState<string>('2025')
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
            const rows = (result.data as any[]).map(r => ({
              prenom: r.forename,
              nom: r.name,
              equipe: r.equipe,
              note: r.rating?.replace(',', '.') ?? '',
              ranking: r.match ?? '',
              place: 0
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

  // ---- Filtering ----
  const currentNotes = selectedLeague === 'LFB' ? lfbNotes : lf2Notes
  const currentAllStars = allStars.filter(p => p.ligue === selectedLeague && p.annee === selectedYear)
  const currentFirstTeam = firstTeams.filter(p => p.ligue === selectedLeague && p.annee === selectedYear)
  
  const sortedNotes = [...currentNotes].sort(
    (a, b) => Number(b.note) - Number(a.note)
  )

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
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 via-transparent to-yellow-600/10" />
        <div className="container relative mx-auto px-4 py-8 md:py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-500 mb-3">
              First Pick Stats
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
              Statistiques complètes des joueuses LFB & LF2
            </p>
          </motion.div>
        </div>
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
                onClick={() => setSelectedLeague('LFB')}
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
                onClick={() => setSelectedLeague('LF2')}
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
                onClick={() => setSelectedCategory('notes')}
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
                onClick={() => setSelectedCategory('allStars')}
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
                onClick={() => setSelectedCategory('firstTeam')}
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
                      onClick={() => setSelectedYear(year)}
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
                        {selectedLeague} - Saison 2024/2025
                      </p>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
                        <tr>
                          <th className="text-left py-4 px-6 text-slate-100 font-semibold">#</th>
                          <th className="text-left py-4 px-6 text-slate-100 font-semibold">Joueuse</th>
                          <th className="text-left py-4 px-6 text-slate-100 font-semibold">Équipe</th>
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
                              <td className="py-4 px-6 text-slate-600 dark:text-slate-300">
                                {p.equipe}
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