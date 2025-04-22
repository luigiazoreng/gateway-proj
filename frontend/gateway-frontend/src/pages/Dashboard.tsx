// src/pages/Dashboard.tsx
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 min-h-screen overflow-auto">
        <h2 className="text-2xl font-semibold mb-4">Eventos Recentes</h2>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-2">Data</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Conexão</th>
                  <th className="px-4 py-2">Tentativas</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }).map((_, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">2025-04-22 14:59</td>
                    <td className="px-4 py-2 text-green-600 font-medium">200</td>
                    <td className="px-4 py-2">nfeio → invoice-creation-success</td>
                    <td className="px-4 py-2">1</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
