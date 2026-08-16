'use client';

import { useRouter } from 'next/navigation';

type Props = {
  onClose: () => void;
};

export default function PlayModal({ onClose }: Props) {
  const router = useRouter();

  const goToLeague = (slug: string) => {
    onClose();
    router.push(`/fantasy/leagues/${slug}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl space-y-4 w-[300px]">
        <h3 className="text-lg font-semibold text-center">Choisis ta ligue</h3>
        <button
          onClick={() => goToLeague('lf2')}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          LF2
        </button>
        <button
          onClick={() => goToLeague('lfb')}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          LFB
        </button>
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:underline block text-center"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}
