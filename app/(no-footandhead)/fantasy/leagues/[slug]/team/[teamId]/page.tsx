 'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

type Player = {
  id: number;
  name: string;
  forename: string;
  team_id: number;
  rate?: number | null;
  isLocked?: boolean;
};

type DeckPlayer = {
  player: {
    id: number;
    forename: string;
    name: string;
  };
  points?: number;
};

export default function TeamPage() {
  const rawParams = useParams();
  const teamId = rawParams?.teamId ? String(rawParams.teamId) : null;
  const searchParams = useSearchParams();
  const weekId = searchParams.get('weekId');
  const [teamName, setTeamName] = useState<string | null>(null);
const [weekLocked, setWeekLocked] = useState(false);
const [displayWeekId, setDisplayWeekId] = useState<number | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [deck, setDeck] = useState<DeckPlayer[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  // const [pointsInput, setPointsInput] = useState<{ [playerId: number]: number }>({});
  const [blockedIds, setBlockedIds] = useState<number[]>([]);
  const isDeckFull = deck.length >= 5;
  const isAdmin = role === "admin";
  const router = useRouter();
  useEffect(() => {
  fetch('/api/me')
    .then(res => res.json())
    .then(data => {
      setRole(data.role);
      console.log("aaaaaa",data.role);
    })
    .catch(err => console.error(err));
}, []);

useEffect(() => {
  if (!weekId) return;
  fetch(`/api/week/status?weekId=${weekId}`)
    .then(res => res.json())
    .then(data => {
      if (data?.startDate) {
        const start = new Date(data.startDate);
        setWeekLocked(new Date() >= start);
      }
    });
}, [weekId]);


  useEffect(() => {
    const numericTeamId = teamId ? Number(teamId) : NaN;
    const numericWeekId = weekId ? Number(weekId) : NaN;

    if (isNaN(numericTeamId) || isNaN(numericWeekId)) {
      console.log('[DEBUG] Params pas prêts → teamId:', teamId, 'weekId:', weekId);
      return;
    }

    console.log('[DEBUG] Params OK → fetch des joueuses');
    fetch(`/api/players/by-team/${numericTeamId}?weekId=${numericWeekId}`)
      .then(res => res.json())
      .then(data => {
        console.log('[DEBUG] Players received:', data);
        setPlayers(data);
      });
  }, [teamId, weekId]);

  useEffect(() => {
  if (!weekId) return;
  fetch(`/api/deck/blocked?weekId=${weekId}`)
    .then(res => res.json())
    .then(data => setBlockedIds(data.blocked));
}, [weekId]);
useEffect(() => {
  if (!weekId) return;

  fetch(`/api/week/display?weekId=${weekId}`)
    .then(res => res.json())
    .then(data => {
      if (data?.displayId) {
        setDisplayWeekId(data.displayId);
      }
    })
    .catch(err => console.error('Erreur récupération semaine:', err));
}, [weekId]);
  useEffect(() => {
    const numericWeekId = weekId ? Number(weekId) : NaN;
    if (isNaN(numericWeekId)) return;

    fetch(`/api/deck/${numericWeekId}`)
      .then(res => res.json())
      .then(setDeck);
  }, [weekId]);

  useEffect(() => {
  if (!teamId) return;

  fetch(`/api/team/name-by-id?id=${teamId}`)
    .then(res => res.json())
    .then(data => {
      if (data?.name) setTeamName(data.name);
    })
    .catch(err => console.error('Erreur fetch team name:', err));
}, [teamId]);

  const isInDeck = (playerId: number) => deck.some(d => d.player.id === playerId);

  const handleRemove = async (playerId: number) => {
    setError(null);
    const res = await fetch('/api/deck/remove', {
      method: 'POST',
      body: JSON.stringify({ playerId, weekId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || 'Erreur suppression');
    } else {
      setDeck(prev => prev.filter(c => c.player.id !== playerId));
    }
  };

  const handleAdd = async (playerId: number) => {
    setError(null);
    const res = await fetch('/api/deck/add', {
      method: 'POST',
      body: JSON.stringify({ playerId, weekId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || 'Erreur');
    } else {
      const newChoice = await res.json();
      setDeck(prev => [...prev, newChoice]);
    }
  };
// const handlePointInputChange = (playerId: number, value: string) => {
//   const num = parseFloat(value);
//   setPointsInput(prev => ({ ...prev, [playerId]: num }));
// };

// const handleUpdatePoints = async (playerId: number) => {
//   const newPoints = pointsInput[playerId];
//   if (isNaN(newPoints)) return alert("Points invalides");
//   if (!weekId) return alert("Semaine non définie");

//   const res = await fetch('/api/player/update', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ playerId, weekId: Number(weekId), newRate: newPoints }),
//   });

//   if (!res.ok) {
//     const { error } = await res.json();
//     alert(error || 'Erreur lors de la mise à jour');
//   } else {
//     alert('Points mis à jour !');
//   }
// };
const renderPlayerCard = (p: Player) => (
  <div
    key={p.id}
    className="flex items-center justify-between gap-3 p-3 rounded-xl border bg-white shadow-sm"
  >
    {/* Joueuse */}
    <div className="min-w-0">
      <p className="font-semibold text-gray-800 truncate">
        {p.forename} {p.name}
      </p>
    </div>

    {/* Partie droite */}
    <div className="flex items-center gap-2">

      {/* ================================= */}
      {/* ADMIN : saisir / modifier la note */}
      {/* ================================= */}

      {isAdmin ? (
        <div className="flex items-center gap-2">
          <Input
            type="number"
            min="0"
            step="0.5"
            defaultValue={p.rate ?? ""}
            placeholder="Pts"
            className="w-20 h-9 text-center"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const value = Number(
                  (e.target as HTMLInputElement).value
                );

                if (!Number.isNaN(value)) {
                  handleUpdateRate(p.id, value);
                }
              }
            }}
          />

          <Button
            size="sm"
            variant="outline"
            onClick={(e) => {
              const input = e.currentTarget
                .previousElementSibling as HTMLInputElement | null;

              if (!input) return;

              const value = Number(input.value);

              if (!Number.isNaN(value)) {
                handleUpdateRate(p.id, value);
              }
            }}
          >
            Enregistrer
          </Button>
        </div>
      ) : (
        /* ================================= */
        /* UTILISATEUR NORMAL */
        /* ================================= */

        <>
          {p.rate !== null && p.rate !== undefined ? (
            <Badge
              className="bg-green-50 text-green-700 border border-green-200"
            >
              {p.rate} pts
            </Badge>
          ) : null}

          {isInDeck(p.id) ? (
            <Badge variant="secondary">
              Dans ton deck
            </Badge>
          ) : blockedIds.includes(p.id) ? (
            <Badge variant="outline">
              Indisponible
            </Badge>
          ) : isDeckFull ? (
            <Badge variant="outline">
              Limite atteinte
            </Badge>
          ) : (
            <Button
              size="sm"
              onClick={() => handleAdd(p.id)}
              className="cursor-pointer"
              disabled={weekLocked}
            >
              Ajouter
            </Button>
          )}
        </>
      )}

    </div>
  </div>
);

const handleUpdateRate = async (
  playerId: number,
  newRate: number
) => {
  if (!weekId) return;

  setError(null);

  try {
    const res = await fetch(
      "/api/admin/update-player-rate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          playerId,
          weekId: Number(weekId),
          rate: newRate,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.error || "Erreur lors de la sauvegarde"
      );
    }

    // Mise à jour immédiate à l'écran
    setPlayers((prev) =>
      prev.map((player) =>
        player.id === playerId
          ? {
              ...player,
              rate: newRate,
            }
          : player
      )
    );

  } catch (err) {
    console.error(err);

    setError(
      err instanceof Error
        ? err.message
        : "Erreur lors de la sauvegarde"
    );
  }
};
const teamOutlineColors: Record<string, string> = {
  "UF Angers": "!text-black !border-black",
  "Lyon ASVEL": "!text-pink-500 !border-pink-500",
  "Tango Bourges": "!text-orange-500 !border-orange-500",
  "Charnay BBS": "!text-pink-400 !border-pink-400",
  "ESBVA Lille": "!text-red-500 !border-red-500",
  "Landerneau BB": "!text-violet-500 !border-violet-500",
  "Basket Landes": "!text-sky-300 !border-sky-300",
  "Lattes-Montpellier": "!text-blue-500 !border-blue-500",
  "Roche Vendée": "!text-red-500 !border-red-500",
  "Toulouse MB": "!text-pink-500 !border-pink-500",
  "Charleville": "!text-black !border-black",
  "Chartres BL": "!text-blue-400 !border-blue-400",
};
  return (
   <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 p-4 md:p-8 md:max-w-[98rem] max-w-md mx-auto w-full space-y-6">
        <Button 
          variant="outline" 
          onClick={() => router.back()}
          className="gap-2 md:gap-3 md:mt-2 cursor-pointer"
        >
          ← Retour
        </Button>

        {!weekId ? (
          <div className="text-center py-8 text-gray-500">Chargement...</div>
        ) : (
          <>
            <Card>
              <CardHeader className="text-center">
             <CardTitle className="text-xl md:mt-2">
  {teamName ? `${teamName}` : `#${teamId}`}
</CardTitle>
  <p className="text-gray-600">
  Semaine {displayWeekId ?? '...'}
</p>
              </CardHeader>
            </Card>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            
            
             <CardContent>
 <div className="hidden md:grid md:mt-6 md:mb-6 grid-cols-2 gap-6 px-4">

    {(() => {
      const half = Math.floor(players.length / 2);
      const col1 = players.slice(0, half);
      const col2 = players.slice(half, players.length % 2 === 0 ? players.length : players.length - 1);
      const lastOdd = players.length % 2 === 1 ? players[players.length - 1] : null;

      return (
        <>
          {/* Colonne gauche */}
          <div className="space-y-3">
            {col1.map(p => renderPlayerCard(p))}
          </div>

          {/* Colonne droite */}
          <div className="space-y-3">
            {col2.map(p => renderPlayerCard(p))}
          </div>

          {/* Si impair → joueuse centrée en bas */}
          {lastOdd && (
            <div className="col-span-2 flex justify-center mt-4">
              <div className="w-full max-w-xs">{renderPlayerCard(lastOdd)}</div>
            </div>
          )}
        </>
      );
    })()}
  </div>

  {/* Version mobile (une seule colonne) */}
  <div className="md:hidden space-y-3">
    {players.map(p => renderPlayerCard(p))}
  </div>
</CardContent>

            

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Mon Deck de la Semaine</CardTitle>
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
                          
                          <span>{player.forename} {player.name}</span>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleRemove(player.id)}
                          disabled={weekLocked}
                          className="cursor-pointer"
                        >
                          Retirer
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="justify-center">
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
          </>
        )}
      </main>
      
      <Footer />
    </div>

    
  );
}