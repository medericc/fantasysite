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
  "Toulouse MB": "/toulouse.webp",
  "Charleville": "/flammes.webp",
  "Chartres BL": "/chartres.webp",
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 p-4 md:p-8 md:mt-10 md:max-w-3xl max-w-md mx-auto w-full space-y-6">
      
        {/* Sélecteur de semaine */}
        <div className="space-y-2">
         <Select
            value={selectedWeek?.id?.toString() || ''}
            onValueChange={(value) => {
              const id = parseInt(value, 10);
              const chosen = weeks.find((w) => w.id === id);
              setSelectedWeek(chosen ?? null);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sélectionnez une semaine" />
            </SelectTrigger>
            <SelectContent>
              {weeks.map((week) => (
                <SelectItem 
                  key={week.id} 
                  value={week.id.toString()}
                  className={week.id === highlightWeekId ? "bg-yellow-50" : ""}
                >
                 Journée {week.id}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Liste des matchs */}
        <div className="space-y-3">
        
          {matches.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-4">
              Aucun match prévu cette semaine
            </p>
          ) : (
            <div className="space-y-3">
              {matches.map((match) => (
                <Card key={match.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-1 grid grid-cols-3 items-center">
                  <Button 
  variant="link" 
  className="justify-end"
  onClick={() => router.push(`/fantasy/leagues/${slug}/team/${match.team_home.id}?weekId=${selectedWeek?.id}`)}
>
  <Image
    src={teamLogos[match.team_home.name] || "/Logo_LBWL.png"}
    alt={match.team_home.name}
    width={40} // ~taille 8
    height={40}
    className="h-10 w-auto cursor-pointer md:h-12"
  />
</Button>

<div className="text-center">
  <Badge variant="outline" className="px-3 py-1">
    VS
  </Badge>
</div>

<Button 
  variant="link" 
  className="justify-start"
  onClick={() => router.push(`/fantasy/leagues/${slug}/team/${match.team_away.id}?weekId=${selectedWeek?.id}`)}
>
  <Image
    src={teamLogos[match.team_away.name] || "/Logo_LBWL.png"}
    alt={match.team_away.name}
    width={40}
    height={40}
    className="h-10 w-auto cursor-pointer md:h-12"
  />
</Button>

                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

       {/* Deck */}
<Card>
  <CardHeader>
    <h2 className="text-lg text-center font-bold">Mon Deck de la Semaine</h2>
  </CardHeader>
  <CardContent>
    {deck.length === 0 ? (
      <p className="text-gray-500 text-center py-4">
        Aucune joueuse sélectionnée
      </p>
    ) : (
      <div className="space-y-2">
        {deck.map(({ player }) => (
          <div
            key={player.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span>{player.name}</span>
              <span className="text-sm text-gray-500">{player.team}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-green-700 text-sm">
                {typeof player.player_rate?.[0]?.rate === 'number'
                  ? `${player.player_rate[0].rate} pts`
                  : '—'}
              </span>
          <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleRemove(player.id)}
                          disabled={weekLocked}
                          className='cursor-pointer'
                        >
                          Retirer
                        </Button>

            </div>
          </div>
        ))}
      </div>
    )}
  </CardContent>
  <CardFooter className="justify-center">
 <Badge variant="outline">
  {deck.length}/5 {deck.length <= 1 ? "joueuse sélectionnée" : "joueuses sélectionnées"}
</Badge>

  </CardFooter>
</Card>
 </main>
      
      <Footer />
    </div>
  );
}