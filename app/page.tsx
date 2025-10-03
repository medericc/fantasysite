'use client'

import { useState, useEffect } from 'react'
import Papa from 'papaparse'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// ---- Types ----
type NotePlayer = { prenom: string; nom: string; equipe: string; note: string; ranking: string }
type AllStar = { prenom: string; nom: string; ligue: string; annee: string; equipe: string }
type FirstTeam = { prenom: string; nom: string; ligue: string; annee: string }

type Category = 'notes' | 'allStars' | 'firstTeam'

export default function FirstPickStats() {
  const [selectedLeague, setSelectedLeague] = useState<'LFB' | 'LF2'>('LF2')
  const [selectedCategory, setSelectedCategory] = useState<Category>('notes')
  const [selectedYear, setSelectedYear] = useState<string>('2024')

  const [lfbNotes, setLfbNotes] = useState<NotePlayer[]>([])
  const [lf2Notes, setLf2Notes] = useState<NotePlayer[]>([])
  const [allStars, setAllStars] = useState<AllStar[]>([])
  const [firstTeams, setFirstTeams] = useState<FirstTeam[]>([])

  // ---- Load CSVs once ----
  useEffect(() => {
    Papa.parse('/lfb_notes.csv', {
      header: true,
      download: true,
      complete: (result) => {
        const rows = (result.data as any[]).map(r => ({
          prenom: r.forename,
          nom: r.name,
          equipe: r.equipe,
          note: r.rating?.replace(',', '.') ?? '',
          ranking: r.match ?? ''
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
          ranking: r.match ?? ''
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
          annee: r.annee
        }))
        setFirstTeams(rows)
      },
    })
  }, [])

  // ---- Filtering ----
  const currentNotes = selectedLeague === 'LFB' ? lfbNotes : lf2Notes
  const currentAllStars = allStars.filter(p => p.ligue === selectedLeague && p.annee === selectedYear)
  const currentFirstTeam = firstTeams.filter(p => p.ligue === selectedLeague && p.annee === selectedYear)
const sortedNotes = [...currentNotes].sort(
  (a, b) => Number(b.note) - Number(a.note)
)

  // années disponibles (FirstTeam sans 2022)
  const availableYears = ['2023', '2024']
const lfbAllStarCounts = allStars
  .filter(p => p.ligue === 'LFB')
  .reduce((acc, p) => {
    const key = `${p.prenom} ${p.nom}`
    acc[key] = (acc[key] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-8">
        
        {/* League selector */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-4">
            <Button
              variant={selectedLeague === 'LFB' ? "default" : "outline"}
              className={`rounded-full px-10 ${
                selectedLeague === 'LFB'
                  ? 'bg-yellow-600 hover:bg-yellow-600 text-white'
                  : ''
              }`}
              onClick={() => setSelectedLeague('LFB')}
            >
              LFB
            </Button>
            <Button
              variant={selectedLeague === 'LF2' ? "default" : "outline"}
              className={`rounded-full px-10 ${
                selectedLeague === 'LF2'
                  ? 'bg-yellow-600 hover:bg-yellow-600 text-white'
                  : ''
              }`}
              onClick={() => setSelectedLeague('LF2')}
            >
              LF2
            </Button>
          </div>
        </div>

        {/* Sélecteur de catégorie */}
        <div className="flex justify-center mb-6">
          <Select
            value={selectedCategory}
            onValueChange={(val: Category) => setSelectedCategory(val)}
          >
            <SelectTrigger className="w-[200px] bg-white dark:bg-slate-800">
              <SelectValue placeholder="Sélectionner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="notes">Notes Saison</SelectItem>
              <SelectItem value="allStars">All-Stars</SelectItem>
              <SelectItem value="firstTeam">First Team</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Si All-Stars ou First Team → menu années */}
        {(selectedCategory === 'allStars' || selectedCategory === 'firstTeam') && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center mb-6"
            >
              <div className="flex space-x-2">
                {(
  selectedCategory === 'firstTeam'
    ? availableYears
    : (selectedLeague === 'LFB' ? ['2022','2023','2024'] : ['2023','2024'])
).map((year) => (

                  <Button
                    key={year}
                    variant={selectedYear === year ? "default" : "outline"}
                    className={`rounded-full px-6 ${
                      selectedYear === year
                        ? 'bg-yellow-600 text-white'
                        : ''
                    }`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Notes Saison */}
       {selectedCategory === 'notes' && (
  <Table>
    <TableHeader className="bg-slate-800">
      <TableRow>
        <TableHead className="text-slate-100">Place</TableHead>
        <TableHead className="text-slate-100">Prénom</TableHead>
        <TableHead className="text-slate-100">Nom</TableHead>
        <TableHead className="text-slate-100">Note</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {sortedNotes.map((p, idx) => (
        <TableRow key={idx}>
          {/* Place calculée dynamiquement */}
          <TableCell className="font-bold">{idx + 1}</TableCell>
          <TableCell>{p.prenom}</TableCell>
          <TableCell>{p.nom}</TableCell>
          <TableCell className="font-semibold text-yellow-600">{p.note}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)}

        {/* All-Stars */}
        {selectedCategory === 'allStars' && (
          <div className="grid md:grid-cols-2 gap-4">
            {currentAllStars.map((p, idx) => (
              <Card key={idx}>
                <CardContent className="p-4">
                  {p.prenom} {p.nom} {selectedLeague === 'LFB' && (
  <span className="text-sm text-gray-500 ml-2">
  ({lfbAllStarCounts[`${p.prenom} ${p.nom}`]} sélection
  {lfbAllStarCounts[`${p.prenom} ${p.nom}`] > 1 ? 's' : ''})
</span>

)}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* First Team */}
        {selectedCategory === 'firstTeam' && (
          <div className="grid gap-4">
            {currentFirstTeam.map((p, i) => (
              <Card key={i}>
                <CardContent className="flex items-center p-4 text-center">
                  
                  <div>
                    <h3 className="font-bold text-center">{p.prenom} {p.nom}</h3>
                   
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
