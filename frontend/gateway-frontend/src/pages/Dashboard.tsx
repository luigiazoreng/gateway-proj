// src/pages/Dashboard.tsx
import Sidebar from "../components/Sidebar";
import { FilterBar } from "../components/FilterBar";
import { RequestChart } from "../components/RequestChart";
import { RequestTable } from "../components/RequestTable";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#0f111a] text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      {/* Filter bar */}
      <FilterBar />
      {/* Main content */}
      <div className="flex-1 ml-64 overflow-y-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">Events</h1>

        {/* Filters */}
        <div className="bg-[#1e212c] p-3 rounded-md flex flex-wrap gap-2 border border-slate-700">
          {[
            "Date", "Request", "Connections", "Sources", "Destinations",
            "Status", "HTTP Response", "Attempts", "CLI Users"
          ].map((item) => (
            <span key={item} className="bg-[#2b2f3c] px-2 py-1 rounded text-blue-400 border border-blue-600 text-sm">
              + {item}
            </span>
          ))}
          <button className="ml-auto bg-black text-white text-xs px-3 py-1 rounded">Recent Filters ▾</button>
        </div>

        {/* Chart */}
        <div className="bg-[#1a1c26] p-4 rounded-lg shadow">
          {/* Put your BarChart here */}
          <RequestChart />
        </div>

        {/* Table */}
        <div className="bg-[#1a1c26] p-4 rounded-lg shadow overflow-auto">
          {/* Put your RequestTable here */}
          <RequestTable />
        </div>
      </div>
    </div>
  );
}

