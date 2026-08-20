'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type LeagueRanking = {
  username: string;
  week: string;
  weekIndex: number;
  totalIndex: number;
  weekPoints: number;
  totalPoints: number;
};

type LeagueData = {
  [league: string]: {
    weekly: {
      [week: string]: LeagueRanking[];
    };
    total: LeagueRanking[];
  };
};

export default function DashboardPage() {
  const [data, setData] = useState<LeagueData>({});
  const [loading, setLoading] = useState(true);
  const [rankingData, setRankingData] = useState<LeagueData>({});
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [dashboardData, setDashboardData] = useState<any[]>([]);
  const [modal, setModal] = useState<{
    open: boolean;
    type: 'weekly' | 'total' | null;
    week?: string;
  }>({ open: false, type: null });
  
  const [modalLeague, setModalLeague] = useState<'LFB' | 'LF2'>('LFB');
  const [leagueModalOpen, setLeagueModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [resUser, resRanking] = await Promise.all([
          fetch('/api/dashboard'),
          fetch('/api/dashboard/rankings'),
        ]);

        const userJson = await resUser.json();
        const rankingJson = await resRanking.json();
        
        if (Array.isArray(userJson) && userJson.length > 0) {
          setUser(userJson[0]);
        }
setDashboardData(userJson);
        setRankingData(rankingJson);
        setData(rankingJson);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    };

    fetchAll();
  }, []);

  // Tri intelligent pour que "Semaine 10" s'affiche bien APRES "Semaine 9"
  const weeks = (league: string) =>
    Object.keys(data[league]?.weekly || {}).sort((a, b) => {
      const numA = Number(a.replace(/\D/g, ''));
      const numB = Number(b.replace(/\D/g, ''));
      return numA - numB;
    });
    
  const renderTable = (rankings: LeagueRanking[], title: string) => {
    if (!user?.username) return null;

    // Trouver l'entrée du joueur actuel
    const currentUserRow = rankings.find(
      r => r.username.trim().toLowerCase() === user.username.trim().toLowerCase()
    );

    // Le reste du classement sans l'utilisateur
    const otherRows = rankings.filter(
      r => r.username.trim().toLowerCase() !== user.username.trim().toLowerCase()
    );

    // Nouveau classement : joueur actuel en premier, puis les autres
    const reorderedRankings = currentUserRow ? [currentUserRow, ...otherRows] : rankings;

    return (
      <div className="mt-6 overflow-x-auto max-h-[70vh] rounded-xl shadow-lg border border-gray-200">
        <table className="w-full bg-white">
          <thead className="bg-gradient-to-r from-gray-800 to-gray-900 sticky top-0 z-10">
            <tr>
              <th className="p-4 text-left text-white text-sm font-semibold uppercase tracking-wider">#</th>
              <th className="p-4 text-left text-white text-sm font-semibold uppercase tracking-wider">Joueur</th>
              <th className="p-4 text-left text-white text-sm font-semibold uppercase tracking-wider">Points</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {reorderedRankings.map((r) => {
              const isCurrentUser =
                r.username.trim().toLowerCase() === user.username.trim().toLowerCase();
              return (
                <tr
                  key={r.username}
                  className={`${
                    isCurrentUser 
                      ? 'bg-gradient-to-r from-yellow-100 to-yellow-50 font-semibold shadow-inner' 
                      : 'hover:bg-gray-50 transition-colors duration-150'
                  }`}
                >
                  <td className="p-4 text-gray-600">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm ${
                      isCurrentUser ? 'bg-yellow-500 text-white font-bold' : 'bg-gray-100'
                    }`}>
                      {modal.type === 'weekly' ? r.weekIndex : r.totalIndex}
                    </span>
                  </td>
                  <td className="p-4">
                    {isCurrentUser ? (
                      <span className="py-1 px-3 bg-yellow-500 text-white rounded-full text-sm font-bold">
                        {r.username}
                      </span>
                    ) : (
                      <span className="text-gray-800">{r.username}</span>
                    )}
                  </td>
                  <td className="p-4">
                    <span className={`font-bold text-lg ${
                      isCurrentUser ? 'text-yellow-700' : 'text-gray-800'
                    }`}>
                      {modal.type === 'weekly' ? r.weekPoints : r.totalPoints}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Header />
        <div className="max-w-4xl mx-auto p-4 space-y-6 mt-8">
          <Skeleton className="h-16 w-full rounded-xl" />
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-32 rounded-xl" />
          </div>
          <Skeleton className="h-64 w-full rounded-xl" />
        </div>
        <Footer />
      </div>
    );
  }

  // On force l'affichage dans un ordre précis : d'abord LFB, puis LF2.
  const leaguesToDisplay = ['LFB', 'LF2'];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8 lg:space-y-12">
        {/* Description Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-md">
              📋
            </div>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
              Pour chaque journée, sélectionner jusqu&apos;à 5 joueuses par ligue. Toute joueuse choisie devient indisponible pendant 6 journées. Les points sont attribués selon leurs performances réelles.
            </p>
          </div>
        </div>

        {/* Boucle sur LFB puis LF2 */}
        {leaguesToDisplay.map((league) => {
          const latestWeek = weeks(league).slice(-1)[0];
          const weekRankings = rankingData[league]?.weekly?.[latestWeek] || [];
          const totalRankings = rankingData[league]?.total || [];

          const userWeekly = weekRankings.find((r) => r.username === user?.username);
          const userTotal = totalRankings.find((r) => r.username === user?.username);

 // On récupère les infos de cette ligue spécifique depuis l'API
  const currentLeagueData = dashboardData.find((d) => d.league === league);
  const weekNumber = currentLeagueData?.weekNumber;
  
  // Formatage : "1ère" si c'est 1, sinon "Xème"
  const formattedWeek = weekNumber 
    ? (weekNumber === 1 ? '1ère' : `${weekNumber}ème`) 
    : 'En attente';

          return (
            <div key={league} className="space-y-4">
              
              {/* Titre de la section (LFB ou LF2) */}
           

              <div className="grid grid-cols-2 gap-4 lg:gap-8">
                {/* ===================== CARTE SEMAINE ===================== */}
                <div
                  onClick={() => {
                    setModalLeague(league as 'LFB' | 'LF2');
                    setModal({ open: true, type: 'weekly', week: latestWeek });
                  }}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer select-none group flex flex-col items-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-4 shadow-md group-hover:scale-110 transition-transform">
                    <span className="text-white text-xl">📅</span>
                  </div>
                  
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Semaine {league}
                  </p>

                  <p className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {userWeekly ? `${userWeekly.weekIndex}e` : '-'}
                  </p>

                  <p className="text-sm sm:text-base text-gray-600 font-medium group-hover:text-blue-600 transition-colors">
                    {userWeekly?.weekPoints || 0} pts
                  </p>

                  <p className="text-xs text-gray-400 mt-4 bg-gray-100 py-1 px-3 rounded-full">
                  {formattedWeek}
                  </p>
                </div>

                {/* ===================== CARTE SAISON ===================== */}
                <div
                  onClick={() => {
                    setModalLeague(league as 'LFB' | 'LF2');
                    setModal({ open: true, type: 'total' });
                  }}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer select-none group flex flex-col items-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 shadow-md group-hover:scale-110 transition-transform">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Saison {league}
                  </p>

                  <p className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
                    {userTotal ? `${userTotal.totalIndex}e` : '-'}
                  </p>

                  <p className="text-sm sm:text-base text-gray-600 font-medium group-hover:text-yellow-600 transition-colors">
                    {userTotal?.totalPoints || 0} pts
                  </p>

                  <p className="text-xs text-gray-400 mt-4 bg-gray-100 py-1 px-3 rounded-full">
                    Général {league}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Play Button */}
        <div className="w-full max-w-2xl mx-auto py-4 lg:py-8 mt-4">
          <Button 
            size="lg" 
            className="w-full py-6 sm:py-8 text-lg sm:text-xl lg:text-2xl cursor-pointer font-bold shadow-xl bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-2xl transform hover:scale-[1.02] transition-all duration-300"
            onClick={() => setLeagueModalOpen(true)}
          >
            ⚡ JOUER
          </Button>
        </div>
      </main>

      {/* League Selection Modal (Play) */}
      <Dialog open={leagueModalOpen} onOpenChange={setLeagueModalOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-md rounded-2xl p-6 sm:p-8 shadow-2xl">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
              Choisissez la ligue
            </DialogTitle>
          </DialogHeader>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* LFB */}
            <Button
              variant="outline"
              className="h-auto min-h-[130px] cursor-pointer flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-gray-200 bg-white hover:border-yellow-500 hover:bg-yellow-50 hover:shadow-lg transition-all duration-300"
              onClick={() => {
                setLeagueModalOpen(false);
                router.push('/fantasy/leagues/lfb');
              }}
            >
              <span className="text-xl font-bold text-gray-800">LFB</span>
              <span className="text-xs text-gray-500">Ligue Féminine de Basket</span>
            </Button>

            {/* LF2 */}
            <Button
              variant="outline"
              className="h-auto min-h-[130px] cursor-pointer flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-gray-200 bg-white hover:border-yellow-500 hover:bg-yellow-50 hover:shadow-lg transition-all duration-300"
              onClick={() => {
                setLeagueModalOpen(false);
                router.push('/fantasy/leagues/lf2');
              }}
            >
              <span className="text-xl font-bold text-gray-800">LF2</span>
              <span className="text-xs text-gray-500">Ligue Féminine 2</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Rankings Modals (SANS SWITCH) */}
      <Dialog
        open={modal.open}
        onOpenChange={(open) => setModal({ ...modal, open })}
      >
        <DialogContent className="sm:max-w-[90%] lg:max-w-[70%] max-h-[90vh] overflow-auto rounded-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2 mb-4">
              {modal.type === 'weekly' 
                ? `📊 Classement Semaine - ${modalLeague}` 
                : `🏆 Classement Saison - ${modalLeague}`}
            </DialogTitle>
          </DialogHeader>

          {/* Affichage direct du tableau en fonction de ce qui a été cliqué */}
          {modal.type === 'weekly' &&
            rankingData[modalLeague]?.weekly?.[modal.week || ''] &&
            renderTable(
              rankingData[modalLeague].weekly[modal.week || ''],
              'Semaine'
            )}

          {modal.type === 'total' &&
            rankingData[modalLeague]?.total &&
            renderTable(
              rankingData[modalLeague].total,
              'Saison'
            )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}