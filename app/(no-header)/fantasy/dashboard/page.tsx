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
  weekPoints: number;
  totalIndex: number;
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
    <div className="mt-4 overflow-x-auto max-h-[70vh]">
      <table className="w-full rounded-lg overflow-hidden border">
        <thead className="bg-gray-800 sticky top-0">
          <tr>
            <th className="p-3 text-left text-white">#</th>
            <th className="p-3 text-left text-white">Joueur</th>
            <th className="p-3 text-left text-white">Points</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {reorderedRankings.map((r) => {
            const isCurrentUser =
              r.username.trim().toLowerCase() === user.username.trim().toLowerCase();
            return (
              <tr
                key={r.username}
                className={`${isCurrentUser ? 'bg-yellow-200 font-medium' : 'hover:bg-gray-50'}`}
              >
                {/* On affiche toujours la vraie position */}
                <td className="p-3">
                  {modal.type === 'weekly' ? r.weekIndex : r.totalIndex}e
                </td>
                <td className="p-3">
                  {isCurrentUser ? (
                    <span className="py-1 rounded font-semibold">{r.username}</span>
                  ) : (
                    r.username
                  )}
                </td>
                <td className="p-3 font-medium">
                  {modal.type === 'weekly' ? r.weekPoints : r.totalPoints}
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
      <div className="p-4 space-y-6">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow md:p-8 md:mt-10 md:max-w-4xl p-4 max-w-md mx-auto w-full space-y-8 xl:space-y-16 mt-2 xl:mt-20">
        <div className="bg-white p-2  shadow-sm border">
          <p className="text-center text-gray-700 ">
            Pour chaque journée, sélectionner jusqu&lsquo;à 5 joueuses. Toute joueuse choisie devient indisponible pendant 6 semaines. Les points sont attribués selon leurs performances réelles.
          </p>
        </div>

        {Object.keys(rankingData).map((league) => {
          const latestWeek = weeks(league).slice(-1)[0];
          const weekRankings = rankingData[league]?.weekly?.[latestWeek] || [];
          const totalRankings = rankingData[league]?.total || [];

          const userWeekly = weekRankings.find((r) => r.username === user?.username);
          const userTotal = totalRankings.find((r) => r.username === user?.username);

          return (
            <div key={league} className="space-y-6">
            
              {/* User Stats */}
              <div className="grid grid-cols-2 gap-4 xl:mt-4">
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center">
                  <p className="text-sm font-medium text-gray-500">Semaine</p>
                  <p className="text-xl font-bold text-gray-800">
                    {userWeekly ? `${userWeekly.weekIndex}e` : '-'}
                  </p>
                  <p className="text-sm text-gray-600">{userWeekly?.weekPoints || 0} pts</p>
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center">
                  <p className="text-sm font-medium text-gray-500">Saison</p>
                  <p className="text-xl font-bold text-gray-800">
                    {userTotal ? `${userTotal.totalIndex}e` : '-'}
                  </p>
                  <p className="text-sm text-gray-600">{userTotal?.totalPoints || 0} pts</p>
                </div>
              </div>

              {/* Buttons for Rankings */}
              <div className="grid grid-cols-2 gap-4 xl:mt-6">
               <Button 
  variant="outline" 
  className="w-full bg-white text-sm sm:text-base max-[400px]:text-[13.1px] max-[375px]:text-[11px]"
  onClick={() => openWeeklyModal(league)}
>
  Voir classement semaine
</Button>
<Button 
  variant="outline" 
  className="w-full bg-white text-sm sm:text-base max-[400px]:text-[13.1px] max-[375px]:text-[11px]"
  onClick={openTotalModal}
>
  Voir classement saison
</Button>

              </div>
            </div>
          );
        })}
         <div className="p-4 max-w-md mx-auto w-full mb-2 xl:mb-10">
        <Button 
          size="lg" 
          className="w-full py-6 text-lg cursor-pointer font-bold shadow-md bg-gradient-to-r from-yellow-600 to-yellow-600 hover:from-yellow-700 hover:to-yellow-700 text-white"
          onClick={() => router.push('/fantasy/leagues/lfb')}
        >
          JOUER
        </Button>
      </div>
      </main>

      {/* Play Button */}
     

      {/* Rankings Modals */}
      <Dialog open={modal.open} onOpenChange={(open) => setModal({...modal, open})}>
        <DialogContent className="sm:max-w-[90%] max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>
              {modal.type === 'weekly' ? 'Classement Semaine' : 'Classement Saison'}
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