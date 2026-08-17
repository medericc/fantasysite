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
  const [modal, setModal] = useState<{
    open: boolean;
    type: 'weekly' | 'total' | null;
    week?: string;
  }>({ open: false, type: null });
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
        console.log("=== USER JSON ===", userJson);
        if (Array.isArray(userJson) && userJson.length > 0) {
          setUser(userJson[0]);
        }

        setRankingData(rankingJson);
        setData(rankingJson);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    };

    fetchAll();
  }, []);

  const weeks = (league: string) =>
    Object.keys(data[league]?.weekly || {}).sort();
    
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                  {/* On affiche toujours la vraie position */}
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

  const openWeeklyModal = (league: string) => {
    const latestWeek = weeks(league).slice(-1)[0];
    setModal({
      open: true,
      type: 'weekly',
      week: latestWeek
    });
  };

  const openTotalModal = () => {
    setModal({
      open: true,
      type: 'total'
    });
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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8 lg:space-y-16">
        {/* Description Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-md">
              📋
            </div>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
              Pour chaque journée, sélectionner jusqu&lsquo;à 5 joueuses par ligue. Toute joueuse choisie devient indisponible pendant 6 journées. Les points sont attribués selon leurs performances réelles.
            </p>
          </div>
        </div>

        {/* Leagues */}
        {Object.keys(rankingData).map((league) => {
          const latestWeek = weeks(league).slice(-1)[0];
          const weekRankings = rankingData[league]?.weekly?.[latestWeek] || [];
          const totalRankings = rankingData[league]?.total || [];

          const userWeekly = weekRankings.find((r) => r.username === user?.username);
          const userTotal = totalRankings.find((r) => r.username === user?.username);

          return (
            <div key={league} className="space-y-6 lg:space-y-8">
              {/* User Stats */}
              <div className="grid grid-cols-2 gap-4 lg:gap-8">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-4 shadow-md">
                    <span className="text-white text-xl">📅</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Semaine</p>
                  <p className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                    {userWeekly ? `${userWeekly.weekIndex}e` : '-'}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
                    {userWeekly?.weekPoints || 0} pts
                  </p>
                </div>
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 shadow-md">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Saison</p>
                  <p className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                    {userTotal ? `${userTotal.totalIndex}e` : '-'}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
                    {userTotal?.totalPoints || 0} pts
                  </p>
                </div>
              </div>

              {/* Buttons for Rankings */}
            {/* Buttons for Rankings */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full">
  <Button
    variant="outline"
    className="w-full min-w-0 h-auto min-h-[80px] px-3 sm:px-6 py-5 sm:py-8 rounded-xl border-2 border-gray-200 bg-white hover:border-yellow-500 hover:bg-yellow-50 hover:shadow-lg transition-all duration-300 font-semibold text-gray-700 hover:text-yellow-700 whitespace-normal break-words text-sm sm:text-base"
    onClick={() => openWeeklyModal(league)}
  >
    <span className="block w-full text-center leading-snug">
      📊 Voir classement semaine
    </span>
  </Button>

  <Button
    variant="outline"
    className="w-full min-w-0 h-auto min-h-[80px] px-3 sm:px-6 py-5 sm:py-8 rounded-xl border-2 border-gray-200 bg-white hover:border-yellow-500 hover:bg-yellow-50 hover:shadow-lg transition-all duration-300 font-semibold text-gray-700 hover:text-yellow-700 whitespace-normal break-words text-sm sm:text-base"
    onClick={openTotalModal}
  >
    <span className="block w-full text-center leading-snug">
      🏆 Voir classement saison
    </span>
  </Button>
</div>
            </div>
          );
        })}
        
        {/* Play Button */}
        <div className="w-full max-w-2xl mx-auto py-4 lg:py-8">
         <Button 
  size="lg" 
  className="w-full py-6 sm:py-8 text-lg sm:text-xl lg:text-2xl cursor-pointer font-bold shadow-xl bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-2xl transform hover:scale-[1.02] transition-all duration-300"
  onClick={() => setLeagueModalOpen(true)}
>
  ⚡ JOUER
</Button>
        </div>
      </main>


{/* League Selection Modal */}
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
 
        <span className="text-xl font-bold text-gray-800">
          LFB
        </span>
        <span className="text-xs text-gray-500">
          Ligue Féminine de Basket
        </span>
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
   
        <span className="text-xl font-bold text-gray-800">
          LF2
        </span>
        <span className="text-xs text-gray-500">
          Ligue Féminine 2
        </span>
      </Button>

    </div>
  </DialogContent>
</Dialog>



      {/* Rankings Modals */}
      <Dialog open={modal.open} onOpenChange={(open) => setModal({...modal, open})}>
        <DialogContent className="sm:max-w-[90%] lg:max-w-[70%] max-h-[90vh] overflow-auto rounded-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              {modal.type === 'weekly' ? '📊 Classement Semaine' : '🏆 Classement Saison'}
            </DialogTitle>
          </DialogHeader>
          {modal.type === 'weekly' && rankingData[Object.keys(rankingData)[0]]?.weekly[modal.week || ''] && (
            renderTable(rankingData[Object.keys(rankingData)[0]].weekly[modal.week || ''], 'Semaine')
          )}
          {modal.type === 'total' && rankingData[Object.keys(rankingData)[0]]?.total && (
            renderTable(rankingData[Object.keys(rankingData)[0]].total, 'Saison')
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}