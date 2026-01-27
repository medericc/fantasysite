'use client';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState,useEffect } from 'react';
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";

import Image from 'next/image';
import VideoHeader from '../../../components/VideoHeader';
import InputForm from '../../../components/InputForm';
import MatchTable from '../../../components/MatchTable';
import { playersLFB_LF2 } from "@/lib/repertoire";
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
    gt: string; // Game time
    actionType: string;
    success: boolean;
    s1: string; // Score team 1
    s2: string; // Score team 2
    player: string; // Nom du joueur
}
type Competition = "LFB" | "LF2";
interface MatchData {
    pbp: MatchAction[]; // Play-by-play data
}

export default function Home() {
    const [competition, setCompetition] = useState<Competition | "">("");

const [selectedDay, setSelectedDay] = useState<string>("");
const [selectedMatchUrl, setSelectedMatchUrl] = useState<string>("");


const [csvGenerated, setCsvGenerated] = useState(false);
const [csvData, setCsvData] = useState<string[][]>([]);

  const [selectedPlayer, setSelectedPlayer] = useState<string>("L. JEROME"); // État pour le joueur sélectionné
    const [selectedLink, setSelectedLink] = useState<string>(''); // État pour le lien sélectionné
    const [customUrl, setCustomUrl] = useState(''); // État pour l'URL personnalisée
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [isWaitingModalOpen, setIsWaitingModalOpen] = useState(false);
const [playerInput, setPlayerInput] = useState("");   // ce que l’utilisateur tape
const [playerQuery, setPlayerQuery] = useState("");   // ce qu’on utilise pour filtrer
const [open, setOpen] = useState(false);

    
    useEffect(() => {
      setSelectedLink('');
      setCsvGenerated(false);
      setCsvData([]);
    }, [selectedPlayer]);
    
    const playerMapping: Record<string, string> = {
        "Lucile": "L. JEROME",
        "Carla": "C. LEITE"
    };
    
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
  return normalize(a.player).startsWith(target)

});
    

     
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
        <div className="flex  flex-col items-center justify-center min-h-screen p-6 sm:p-12 gap-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white         ">
        <VideoHeader className="absolute top-0 left-0 w-full" />
      
        <main className="flex flex-col items-center gap-6 w-full max-w-lg sm:max-w-2xl md:max-w-4xl">
          {/* Menus déroulants */}
    <Select
  value={competition}
  onValueChange={(v) => {
    setCompetition(v as Competition);
    setSelectedDay("");
    setSelectedMatchUrl("");
  }}
>

  <SelectTrigger>
    <SelectValue placeholder="Choisis la compétition" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="LFB">LFB</SelectItem>
    <SelectItem value="LF2">LF2</SelectItem>
  </SelectContent>
</Select>
   {competition && (
  <Select value={selectedDay} onValueChange={setSelectedDay}>
    <SelectTrigger>
      <SelectValue placeholder="Choisis la journée" />
    </SelectTrigger>
    <SelectContent>
      {MATCHES[competition].map((d) => (
        <SelectItem key={d.day} value={d.day}>
          {d.day}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
)}
{dayData && (
  <Select value={selectedMatchUrl} onValueChange={setSelectedMatchUrl}>
    <SelectTrigger>
      <SelectValue placeholder="Choisis le match" />
    </SelectTrigger>
    <SelectContent>
      {dayData.matches.map((m: { label: string; url: string }) => (
  <SelectItem key={m.url} value={m.url}>
    {m.label}
  </SelectItem>
))}

    </SelectContent>
  </Select>
)}

<Command className="w-full max-w-sm rounded-lg border">
  <CommandInput
    placeholder="Tape le nom de la joueuse (ex: jerome)"
    value={playerInput}
    onFocus={() => setOpen(true)}
    onValueChange={(v) => {
      const safe = (v ?? "").toUpperCase();
      setPlayerInput(safe);
      setPlayerQuery(safe); // 👈 par défaut, saisie libre
      setOpen(true);
    }}
  />

  {open && (
    <CommandList>
      <CommandEmpty>Aucune suggestion</CommandEmpty>

      {playersLFB_LF2
        .filter(p =>
          normalize(p.label).includes(normalize(playerInput))
        )
        .map(p => (
          <CommandItem
            key={p.ffbbKey}
            value={p.ffbbKey}
            onSelect={() => {
              setPlayerInput(p.label.toUpperCase());   // affichage joli
              setPlayerQuery(p.ffbbKey);               // clé FFBB
              setOpen(false);
            }}
          >
            {p.label}
          </CommandItem>
        ))}
    </CommandList>
  )}
</Command>




      
          {/* Champ de saisie du lien personnalisé */}
          <InputForm 
            value={customUrl} 
            onChange={(e) => setCustomUrl(e.target.value)} 
            onGenerate={handleGenerate} 
            
          />
      
          {/* Table des stats */}
          {csvGenerated && (
            <div className="w-full overflow-x-auto">
              <MatchTable data={csvData} />
            </div>
          )}
        </main>
      
        {/* Modale d'erreur */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
  <DialogContent className="w-[80%] max-w-xs rounded-lg shadow-lg bg-white dark:bg-gray-800 p-6">
    <DialogHeader>
      <DialogTitle className="text-center mb-4">⚠️ Erreur</DialogTitle>
      <DialogDescription className="text-center mt-4">{modalMessage}</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

<Dialog open={isWaitingModalOpen} onOpenChange={setIsWaitingModalOpen}>
<DialogContent className="w-[80%] max-w-xs rounded-lg shadow-lg bg-white dark:bg-gray-800 p-6">
                    <DialogHeader>
                        <DialogTitle  className="flex items-center justify-center gap-2 mb-2">⏳ Patiente</DialogTitle>
                        <DialogDescription className="text-center mt-2"   >{modalMessage}</DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            
       
      </div>
      

    );
}
