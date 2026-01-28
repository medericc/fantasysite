'use client';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState, useEffect } from 'react';
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Info, Home as HomeIcon, Trophy, BarChart3, Sparkles } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import InputForm from '../../../components/InputForm';
import MatchTable from '../../../components/MatchTable';
import { MATCHES } from "@/lib/matches";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface MatchAction {
  period: string;
  gt: string;
  actionType: string;
  success: boolean;
  s1: string;
  s2: string;
  player: string;
}

type Competition = "LFB" | "LF2";


export default function Home() {
  const [competition, setCompetition] = useState<Competition | "">("");
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedMatchUrl, setSelectedMatchUrl] = useState<string>("");
  const [csvGenerated, setCsvGenerated] = useState(false);
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<string>("L. JEROME");
  const [customUrl, setCustomUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isWaitingModalOpen, setIsWaitingModalOpen] = useState(false);
  const [playerInput, setPlayerInput] = useState("");
  const [playerQuery, setPlayerQuery] = useState("");
  const [open, setOpen] = useState(false);
const [isPlayerNotFoundOpen, setIsPlayerNotFoundOpen] = useState(false);
const [playerNotFoundMessage, setPlayerNotFoundMessage] = useState("");

  useEffect(() => {
    // setSelectedLink('');
    setCsvGenerated(false);
    setCsvData([]);
  }, [selectedPlayer]);

  const handleGenerate = async () => {
    if (!selectedMatchUrl || !playerInput) {
      setModalMessage("Sélectionne un match et une joueuse 🏀");
      setIsModalOpen(true);
      return;
    }

    const jsonUrl = selectedMatchUrl
      .replace(/\/u\/FFBB\//, "/data/")
      .replace(/\/bs\.html\/?/, "/")
      .replace(/\/$/, "") + "/data.json";

    try {
      const proxyUrl = `/api/proxy?url=${encodeURIComponent(jsonUrl)}`;
      const response = await fetch(proxyUrl);
      const data = await response.json();

      const target = normalize(playerQuery);
      const filtered = data.pbp.filter((a: any) => {
        if (!a.player) return false;
        return normalize(a.player).startsWith(target);
      });
if (filtered.length === 0) {
  setPlayerNotFoundMessage(`"${playerInput}" n’est pas présent dans ce match`);
  setIsPlayerNotFoundOpen(true);
  return;
}

      const csv = generateCSV(filtered);
      const rows = csv.split("\n").slice(1).map(r => r.split(","));
      setCsvData(rows);
      setCsvGenerated(true);
    } catch (e) {
      setModalMessage("Stats pas encore disponibles ⏳");
      setIsWaitingModalOpen(true);
    }
  };

  const normalize = (s: string) =>
    s
      .toUpperCase()
      .replace(/\./g, "")
      .replace(/\s+/g, "");

  const generateCSV = (data: MatchAction[]): string => {
    let csv = 'Période,Horodatage,Action,Réussite,Score\n';
    data.forEach((action) => {
      csv += `${action.period},${action.gt},${action.actionType},${action.success ? '1' : '0'},${action.s1}-${action.s2}\n`;
    });
    return csv;
  };

  const dayData =
    competition !== ""
      ? MATCHES[competition].find(d => d.day === selectedDay)
      : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* En-tête avec bandeau */}
      <div className="relative border-b border-slate-700/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-slate-900/10 to-yellow-900/10"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link 
                href="/" 
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20 border border-slate-700"
              >
          <HomeIcon className="w-5 h-5 text-gray-300" />   </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-900/40 to-slate-900/40 border border-blue-800/30">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-800 bg-clip-text text-transparent">
                    FIRST PICK
                  </h1>
                  <p className="text-sm text-slate-300 mt-1 font-medium">
                    Livestats personnalisé LFB/LF2
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl px-5 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                <p className="text-sm text-center font-medium text-slate-200">
                  Retrouvez toutes les actions de votre joueuse
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Grille principale */}
          <div className=" space-y-8 gap-8">
            {/* Colonne gauche - Contrôles */}
            <div className="lg:col-span-2 space-y-8">
              {/* Section de sélection */}
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700">
                    <BarChart3 className="w-5 h-5 text-blue-200" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Configuration des stats</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Compétition */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      Compétition
                    </label>
                    <Select
                      value={competition}
                      onValueChange={(v) => {
                        setCompetition(v as Competition);
                        setSelectedDay("");
                        setSelectedMatchUrl("");
                      }}
                    >
                      <SelectTrigger className="h-12 bg-slate-900/80 border-slate-600 hover:border-blue-500/50 transition-colors text-white rounded-xl">
                        <SelectValue placeholder="Choisis la compétition" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700 text-white">
                        <SelectItem value="LFB" className="hover:bg-slate-700 focus:bg-slate-700">
                          <span className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            LFB
                          </span>
                        </SelectItem>
                        <SelectItem value="LF2" className="hover:bg-slate-700 focus:bg-slate-700">
                          <span className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            LF2
                          </span>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Journée */}
                  {competition && (
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        Journée
                      </label>
                      <Select value={selectedDay} onValueChange={setSelectedDay}>
                        <SelectTrigger className="h-12 bg-slate-900/80 border-slate-600 hover:border-yellow-500/50 transition-colors text-white rounded-xl">
                          <SelectValue placeholder="Choisis la journée" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700 text-white">
                          {MATCHES[competition].map((d) => (
                            <SelectItem key={d.day} value={d.day} className="hover:bg-slate-700">
                              {d.day}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                {/* Match */}
                {dayData && (
                  <div className="mt-6 space-y-3">
                    <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      Match
                    </label>
                    <Select value={selectedMatchUrl} onValueChange={setSelectedMatchUrl}>
                      <SelectTrigger className="h-12 bg-slate-900/80 border-slate-600 hover:border-emerald-500/50 transition-colors text-white rounded-xl">
                        <SelectValue placeholder="Choisis le match" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700 text-white">
                        {dayData.matches.map((m: { label: string; url: string }) => (
                          <SelectItem key={m.url} value={m.url} className="hover:bg-slate-700">
                            {m.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Recherche de joueuse */}
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <label className="text-sm font-medium text-slate-300 mb-3 block">
                    Recherche de joueuse
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 relative">
                      <Command className="rounded-xl border-slate-600 bg-slate-900/80">
                        <CommandInput
                          placeholder="Ex : L.MONASSE"
                          value={playerInput}
                          onFocus={() => setOpen(true)}
                          onValueChange={(v) => {
                            const safe = (v ?? "").toUpperCase();
                            setPlayerInput(safe);
                            setPlayerQuery(safe);
                            setOpen(true);
                          }}
                          className="text-white placeholder:text-slate-400"
                        />
                      </Command>
                    </div>
                    
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="p-3 rounded-xl border border-slate-600 hover:border-blue-500/50 bg-slate-900/80 hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20"
                        >
                          <Info className="w-5 h-5 text-blue-300" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-72 bg-slate-800 border-slate-700 text-white p-4 rounded-xl shadow-2xl">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="p-1 rounded bg-blue-900/50">
                              <Info className="w-4 h-4 text-blue-300" />
                            </div>
                            <h4 className="font-bold text-blue-200">Format attendu</h4>
                          </div>
                          <div className="space-y-2 text-sm text-slate-300">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                              <span>Première lettre du prénom</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                              <span>Un point</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                              <span>Le nom en majuscules</span>
                            </div>
                          </div>
                          <div className="mt-3 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                            <p className="font-mono text-sm text-yellow-300">Exemple : L.MONASSE</p>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>

              {/* Champ URL personnalisée et génération */}
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-2xl">
               <div className="flex justify-center">
                <InputForm 
                  value={customUrl} 
                  onChange={(e) => setCustomUrl(e.target.value)} 
                  onGenerate={handleGenerate} 
                />


</div>


              </div>
            </div>

            {/* Colonne droite - Résultats */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {csvGenerated ? (
                  <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-white">Statistiques générées</h3>
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-900/40 to-emerald-900/40">
                        <BarChart3 className="w-5 h-5 text-gray-300" />
                      </div>
                    </div>
                    <div className="overflow-x-auto rounded-xl">
                      <MatchTable data={csvData} />
                    </div>
                   
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-2xl p-8 text-center shadow-2xl">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-900/40 border border-blue-800/30 mb-6">
                      <BarChart3 className="w-12 h-12 text-blue-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Aucune donnée générée</h3>
                    <p className="text-slate-400 mb-6">
                      Sélectionne une compétition, un match et une joueuse, puis clique sur "Générer les stats" pour afficher les données.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700">
                      <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                      <span className="text-sm text-slate-300">En attente de configuration</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[90%] max-w-md rounded-2xl bg-slate-800 border-slate-700 p-6 shadow-2xl">
          <DialogHeader>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-red-900/40">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <span className="text-white font-bold">!</span>
                </div>
              </div>
            </div>
            <DialogTitle className="text-center text-xl font-bold text-white">Configuration incomplète</DialogTitle>
            <DialogDescription className="text-center mt-4 text-slate-300">
              {modalMessage}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={isWaitingModalOpen} onOpenChange={setIsWaitingModalOpen}>
        <DialogContent className="w-[90%] max-w-md rounded-2xl bg-slate-800 border-slate-700 p-6 shadow-2xl">
          <DialogHeader>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative">
                <div className="p-2 rounded-full bg-yellow-900/40 animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                    <span className="text-white">⏳</span>
                  </div>
                </div>
              </div>
            </div>
            <DialogTitle className="text-center text-xl font-bold text-white">Chargement en cours</DialogTitle>
            <DialogDescription className="text-center mt-4 text-slate-300">
              {modalMessage}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

{/* Modale joueuse non présente */}
<Dialog
  open={isPlayerNotFoundOpen}
  onOpenChange={setIsPlayerNotFoundOpen}
>
  <DialogContent className="w-[90%] max-w-md rounded-2xl bg-slate-800 border-slate-700 p-6 shadow-2xl">
    <DialogHeader>
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-2 rounded-full bg-orange-900/40">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
            <span className="text-white font-bold">?</span>
          </div>
        </div>
      </div>

      <DialogTitle className="text-center text-xl font-bold text-white">
        Joueuse introuvable
      </DialogTitle>

      <DialogDescription className="text-center mt-4 text-slate-300">
        {playerNotFoundMessage}
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  );
}