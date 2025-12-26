"use client";

import { useEffect, useState } from "react";

export default function JadeStats() {
  const [players, setPlayers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/kjccc")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Daune Jade
      </h1>

      <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-2">RK</th>
            <th className="p-2">Name</th>
            <th className="p-2">Team</th>
            <th className="p-2">GP</th>
            <th className="p-2">GS</th>
            <th className="p-2">OFF</th>
            <th className="p-2">DEF</th>
            <th className="p-2">REB</th>
            <th className="p-2">AST</th>
          </tr>
        </thead>

        <tbody>
          {players.map((p, i) => (
            <tr
              key={i}
              className={`text-center border-b ${
                i === 0 ? "bg-yellow-100 font-bold" : "bg-white"
              }`}
            >
              <td className="p-2">{p.rank}</td>
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.team}</td>
              <td className="p-2">{p.gp}</td>
              <td className="p-2">{p.gs}</td>
              <td className="p-2">{p.off}</td>
              <td className="p-2">{p.def}</td>
              <td className="p-2">{p.reb}</td>
              <td className="p-2">{p.ast}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
