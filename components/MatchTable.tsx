'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { CheckCircle2, XCircle, Clock, Activity } from 'lucide-react';

interface MatchTableProps {
  data: string[][];
}

const actionMapping: Record<string, string> = {
  'foulon': 'Foul On',
  'rebound': 'Rebond',
  'assist': 'Assist',
  '2pt': 'Tir à 2',
  'turnover': 'Turnover',
  '3pt': 'Tir à 3',
  'steal': 'Steal',
  'block': 'Block',
  'foul': 'Foul',
  '1pt': 'Lancer-Franc',
  'freethrow': 'Lancer',
 
};

const periodColors = [
  'from-slate-800/20 to-slate-900/10', // P1 - Bleu
  'from-slate-800/20 to-slate-900/10', // P2 - Gris
  'from-slate-800/20 to-slate-900/10', // P3 - Jaune/Ambré
  'from-slate-800/20 to-slate-900/10', // P4 - Bleu foncé
];

export default function MatchTable({ data }: MatchTableProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2 w-full">
      {[1, 2, 3, 4].map((period) => {
        const periodData = data
          .filter((row) => row[0] === `${period}`)
          .filter((row) => row[2] !== 'substitution');
        
        return (
          <Card 
            key={period} 
            className={`border border-slate-700/50 bg-gradient-to-br ${periodColors[period-1]} backdrop-blur-sm shadow-xl`}
          >
            <CardContent className="p-4 sm:p-6">
              {/* En-tête de période */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700/30">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg bg-slate-800/40`}>
                    <Activity className="w-4 h-4 text-slate-300" />
                  </div>
                  <h3 className={`text-lg font-bold text-slate-300`}>
                    PÉRIODE {period}
                  </h3>
                </div>
               
              </div>

              {/* Tableau */}
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="border-slate-700/50 hover:bg-transparent">
                    <TableHead className="text-center font-medium text-slate-400">
                      <div className="flex items-center justify-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Chrono</span>
                      </div>
                    </TableHead>
                    <TableHead className="text-center font-medium text-slate-400">
                      Action
                    </TableHead>
                    <TableHead className="text-center font-medium text-slate-400">
                      Statut
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {periodData.length > 0 ? (
                    periodData.map((row, index) => {
                      const action = row[2].toLowerCase();
                      const success = row[3] === '1';
                      const displayAction = actionMapping[action] || row[2];
                      
                      // Logique inversée pour turnover et foul
                      let isSuccess = success;
                      if (['turnover', 'foul'].includes(action)) {
                        isSuccess = !success;
                      }

                      return (
                        <TableRow 
                          key={index} 
                          className="border-slate-800/30 hover:bg-slate-800/20 transition-colors"
                        >
                          <TableCell className="text-center text-slate-300 font-medium">
                            {row[1]}
                          </TableCell>
                          <TableCell className="text-center text-white font-medium">
                            {displayAction}
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex justify-center">
                              {isSuccess ? (
                                <div className="flex items-center gap-1.5 text-emerald-400">
                                  <CheckCircle2 className="w-4 h-4" />
                                  <span className="hidden sm:block text-sm font-medium">Réussi</span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-1.5 text-red-400">
                                  <XCircle className="w-4 h-4" />
                                  <span className="hidden sm:block text-sm font-medium">Loupé</span>
                                </div>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow className="border-slate-800/30 hover:bg-transparent">
                      <TableCell colSpan={3} className="text-center py-8">
                        <div className="flex flex-col items-center gap-2 text-slate-500">
                          <div className="p-2 rounded-lg bg-slate-800/30">
                            <Activity className="w-6 h-6" />
                          </div>
                          <p className="text-sm">Aucune action cette période</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              
              {/* Footer de la carte */}
            
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}