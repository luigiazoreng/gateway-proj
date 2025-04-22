// src/components/Sidebar.tsx
import { LayoutDashboard, BarChart2, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>
      <nav className="flex flex-col gap-4">
        <a href="#" className="flex items-center gap-2 hover:text-blue-400">
          <LayoutDashboard size={20} /> Home
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-blue-400">
          <BarChart2 size={20} /> Metrics
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-blue-400">
          <Settings size={20} /> Settings
        </a>
      </nav>
    </aside>
  );
}
