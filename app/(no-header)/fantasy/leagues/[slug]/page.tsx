'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardHeader,  CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

type Team = { id: number; name: string };
type Match = { id: number; date: string; team_home: Team; team_away: Team };
type Player = {
  id: number;
  name: string;
  team: string;
  player_rate: { rate: number }[];
};
type Choice = { player: Player };
type Week = { id: number; name: string };

export default function LeaguePage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [highlightWeekId, setHighlightWeekId] = useState<number | null>(null);
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [selectedWeek, setSelectedWeek] = useState<Week | null>(null);
  const [deck, setDeck] = useState<Choice[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
const [weekLocked, setWeekLocked] = useState(false);
  // Charger depuis localStorage
  useEffect(() => {
    const savedWeekId = localStorage.getItem(`selectedWeek-${slug}`);
    if (savedWeekId && weeks.length > 0) {
      const chosen = weeks.find(w => w.id === Number(savedWeekId));
      if (chosen) setSelectedWeek(chosen);
    }
  }, [weeks, slug]);

  // Sauvegarder quand on change
  useEffect(() => {
    if (selectedWeek) {
      localStorage.setItem(`selectedWeek-${slug}`, String(selectedWeek.id));
    }
  }, [selectedWeek, slug]);

  // Fetch weeks
  useEffect(() => {
    const fetchWeeks = async () => {
      const res = await fetch(`/api/week/list?slug=${slug}`);
      const json: Week[] = await res.json();
      setWeeks(json);

      const savedWeekId = localStorage.getItem(`selectedWeek-${slug}`);
      if (savedWeekId) {
        const chosen = json.find((w) => w.id === Number(savedWeekId));
        if (chosen) {
          setSelectedWeek(chosen);
          return;
        }
      }

      const now = new Date();
      let closestWeek: Week | null = null;
      
      for (const week of json) {
        const resMatches = await fetch(`/api/games/by-week/${week.id}`);
        const matches = await resMatches.json();

        if (matches.length > 0) {
          const firstMatchDate = new Date(matches[0].date);
          if (firstMatchDate >= now) {
            closestWeek = week;
            setHighlightWeekId(week.id);
            break;
          }
        }
      }

      setSelectedWeek(closestWeek ?? json[0] ?? null);
    };

    fetchWeeks();
  }, [slug]);

useEffect(() => {
  if (!selectedWeek?.id) return;

  fetch(`/api/week/status?weekId=${selectedWeek.id}`)
    .then(res => res.json())
    .then(data => {
      if (data?.startDate) {
        const start = new Date(data.startDate);
        setWeekLocked(new Date() >= start);
      }
    });
}, [selectedWeek?.id]);

  // Fetch matches
  useEffect(() => {
    if (!selectedWeek) return;

    const fetchMatches = async () => {
      try {
        const res = await fetch(`/api/games/by-week/${selectedWeek.id}`);
        const data = await res.json();
        setMatches(data);
      } catch (err) {
        console.error("Erreur fetch matches:", err);
      }
    };

    fetchMatches();
  }, [selectedWeek]);

  useEffect(() => {
    if (!selectedWeek) return;

    const fetchDeck = async () => {
      try {
        const res = await fetch(`/api/deck/${selectedWeek.id}`);
        if (!res.ok) throw new Error("Erreur lors du chargement du deck");
        const data = await res.json();
        setDeck(data);
      } catch (err) {
        console.error("Erreur lors du fetch du deck:", err);
      }
    };

    fetchDeck();
  }, [selectedWeek]);
// mapping des logos
const teamLogos: Record<string, string> = {
  "UF Angers": "/angers.webp",
  "Lyon ASVEL": "/asvel.webp",
  "Tango Bourges": "/bourges.webp",
  "Charnay BBS": "/charnay.webp",
  "ESBVA Lille": "/esbva.webp",
  "Landerneau BB": "/landerneau.webp",
  "Basket Landes": "/landes.webp",
  "Lattes-Montpellier": "/lattes.webp",
  "Roche Vendée": "/roche.webp",




  "Charleville": "/flammes.webp",
  "Chartres BL": "/chartres.webp",

    "Pole Espoir": "/pole-espoir.webp",
  "Toulouse MB": "/toulousemb.webp",
  "Trith PDH": "/trith.webp",
  "Champagne BF": "/champagne.webp",
  "AS Aulnoye": "/aulnoye.webp",

  "Geisepolsheim": "/geispolsheim.webp",

  "Cavigal Nice": "/cavigal.webp",
  "USO Mondeville": "/mondeville.webp",


  "BB La Tronche": "/tronche.webp",

  "Feytiat Basket": "/feytiat.webp",
  "BC Montbrison": "/montbrison.webp",
  "Rouen Bihorel": "/rouen-bihorel.webp",
  "Pays Voironnais": "/voironnais.webp",


  "Monaco BA": "/monaco.webp",

  "Saint-Amand": "/saint-amand.webp",
};


const handleRemove = async (playerId: number) => {
  if (!selectedWeek) return;

  try {
    const res = await fetch(`/api/deck/remove`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        playerId,
        weekId: selectedWeek.id,
      }),
    });

    if (!res.ok) throw new Error("Erreur lors de la suppression");

    const { deleted } = await res.json();

    if (deleted > 0) {
      setDeck((prev) => prev.filter(({ player }) => player.id !== playerId));
    }
  } catch (err) {
    console.error("Erreur suppression joueuse:", err);
  }
};


   return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8">
      
        {/* Sélecteur de semaine */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
           
            <h2 className="text-lg font-bold text-gray-800">Sélection de la semaine</h2>
          </div>
          <Select
            value={selectedWeek?.id?.toString() || ''}
            onValueChange={(value) => {
              const id = parseInt(value, 10);
              const chosen = weeks.find((w) => w.id === id);
              setSelectedWeek(chosen ?? null);
            }}
          >
            <SelectTrigger className="w-full py-6 text-base rounded-xl border-2 border-gray-200 hover:border-yellow-500 focus:border-yellow-500 transition-colors">
              <SelectValue placeholder="Sélectionnez une semaine" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {weeks.map((week) => (
                <SelectItem 
                  key={week.id} 
                  value={week.id.toString()}
                  className={week.id === highlightWeekId ? "bg-yellow-100 font-semibold" : ""}
                >
                  Journée {week.id}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Liste des matchs */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
          
            <h2 className="text-lg font-bold text-gray-800">Matchs de la semaine</h2>
          </div>
          
          {matches.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md border border-gray-100">
              <p className="text-sm text-gray-500 text-center py-8">
                Aucun match prévu cette semaine
              </p>
            </div>
          ) : (
            <div className="space-y-4">
            {matches.map((match) => (
  <Card
    key={match.id}
    className="hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-100 bg-white"
  >
    <CardContent className="p-3 sm:p-4">
      <div className="grid grid-cols-3 items-center gap-2">

        <Button
          variant="link"
          className="justify-center  cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={() =>
            router.push(
              `/fantasy/leagues/${slug}/team/${match.team_home.id}?weekId=${selectedWeek?.id}`
            )
          }
        >
          <div className="flex items-center justify-center w-full">
            <Image
              src={teamLogos[match.team_home.name] || "/Logo_LBWL.png"}
              alt={match.team_home.name}
              width={80}
              height={80}
              className="h-12 w-auto object-contain md:h-16 lg:h-20"
            />
          </div>
        </Button>

        <div className="flex items-center justify-center">
          <Badge
            variant="outline"
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold text-sm sm:text-base shadow-md"
          >
            VS
          </Badge>
        </div>

        <Button
          variant="link"
          className="justify-center cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={() =>
            router.push(
              `/fantasy/leagues/${slug}/team/${match.team_away.id}?weekId=${selectedWeek?.id}`
            )
          }
        >
          <div className="flex items-center justify-center w-full">
            <Image
              src={teamLogos[match.team_away.name] || "/Logo_LBWL.png"}
              alt={match.team_away.name}
              width={80}
              height={80}
              className="h-12 w-auto object-contain md:h-16 lg:h-20"
            />
          </div>
        </Button>

      </div>
    </CardContent>
  </Card>
))}
            </div>
          )}
        </div>

        {/* Deck */}
        <Card className="rounded-2xl shadow-lg border border-gray-100 bg-white">
          <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-center gap-3">
         
              <h2 className="text-xl font-bold text-gray-800">Mon Deck de la Semaine</h2>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            {deck.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  Aucune joueuse sélectionnée
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {deck.map(({ player }) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-yellow-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                        {player.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{player.name}</p>
                        <p className="text-sm text-gray-500">{player.team}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-green-700 text-sm font-semibold bg-green-50 px-3 py-1 rounded-full">
                        {typeof player.player_rate?.[0]?.rate === 'number'
                          ? `${player.player_rate[0].rate} pts`
                          : '—'}
                      </span>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRemove(player.id)}
                        disabled={weekLocked}
                        className='cursor-pointer rounded-full px-3 py-1 hover:scale-105 transition-transform duration-200'
                      >
                        Retirer
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="justify-center border-t border-gray-100 py-4">
            <Badge 
              variant="outline" 
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                deck.length === 5 
                  ? 'bg-green-50 text-green-700 border-green-300' 
                  : 'bg-yellow-50 text-yellow-700 border-yellow-300'
              }`}
            >
              {deck.length}/5 {deck.length <= 1 ? "joueuse sélectionnée" : "joueuses sélectionnées"}
            </Badge>
          </CardFooter>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
}