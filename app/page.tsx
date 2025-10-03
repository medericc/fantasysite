// app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Papa from 'papaparse'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// ---- Types ----
type SimplePlayer = { id: number; joueuse: string; equipe: string }

type LeagueData = {
  notes: NotePlayer[]
  allStars: {
    nord?: SimplePlayer[]
    sud?: SimplePlayer[]
    est?: SimplePlayer[]
    ouest?: SimplePlayer[]
  }
  firstTeam: SimplePlayer[]
}

type SampleData = {
  LF2: LeagueData
  LFB: LeagueData
}

type League = keyof SampleData
type Category = keyof LeagueData
type NotePlayer = { prenom: string; nom: string; equipe: string; note: string; ranking: string }
type AllStar = { prenom: string; nom: string; ligue: string; annee: string }
type FirstTeam = { prenom: string; nom: string; ligue: string; annee: string }


export default function FirstPickStats() {
  const [selectedLeague, setSelectedLeague] = useState<'LFB' | 'LF2'>('LF2')
  const [selectedCategory, setSelectedCategory] = useState<'notes' | 'allStars' | 'firstTeam'>('notes')
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
      complete: (result) => setLfbNotes(result.data as NotePlayer[]),
    })
    Papa.parse('/lf2_notes.csv', {
      header: true,
      download: true,
      complete: (result) => setLf2Notes(result.data as NotePlayer[]),
    })
    Papa.parse('/allstars.csv', {
      header: true,
      download: true,
      complete: (result) => setAllStars(result.data as AllStar[]),
    })
    Papa.parse('/firstteam.csv', {
      header: true,
      download: true,
      complete: (result) => setFirstTeams(result.data as FirstTeam[]),
    })
  }, [])

  // ---- Filtering ----
  const currentNotes = selectedLeague === 'LFB' ? lfbNotes : lf2Notes
  const currentAllStars = allStars.filter(p => p.ligue === selectedLeague && p.annee === selectedYear)
  const currentFirstTeam = firstTeams.filter(p => p.ligue === selectedLeague && p.annee === selectedYear)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-8">
        
        {/* League selector (toujours en haut) */}
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
                {['2022', '2023', '2024'].map((year) => (
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
                <TableHead className="text-slate-100">Prénom</TableHead>
                <TableHead className="text-slate-100">Nom</TableHead>
                <TableHead className="text-slate-100">Équipe</TableHead>
                <TableHead className="text-slate-100">Note</TableHead>
               
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentNotes.map((p, idx) => (
                <TableRow key={idx}>
                  <TableCell>{p.prenom}</TableCell>
                  <TableCell>{p.nom}</TableCell>
                  <TableCell>{p.equipe}</TableCell>
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
                  {p.prenom} {p.nom} - {p.ligue} ({p.annee})
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
                <CardContent className="flex items-center p-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white rounded-full mr-4">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold">{p.prenom} {p.nom}</h3>
                    <p className="text-sm text-slate-600">{p.ligue} - {p.annee}</p>
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
