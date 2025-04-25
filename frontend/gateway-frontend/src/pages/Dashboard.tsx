// src/pages/Dashboard.tsx
import Sidebar from "../components/Sidebar";
import { FilterBar } from "../components/FilterBar";
import { RequestChart } from "../components/RequestChart";
import { RequestTable } from "../components/RequestTable";
import EventTab from "../components/Event";
import { useState } from "react";
import { RequestType } from "../types";
import { mockRequests } from "../data/mockRequests/mock";


export default function Dashboard() {
  // track which row (request) is selected
  const [selectedRequest, setSelectedRequest] = useState<null | RequestType>(null);

  return (
    <div className="flex h-screen bg-[#0f111a] text-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 ml-10 overflow-y-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">Events</h1>
        <FilterBar />
        <div className="bg-[#1a1c26] p-4 rounded-lg shadow">
          <RequestChart />
        </div>
        <div className="bg-[#1a1c26] p-4 rounded-lg shadow overflow-auto">
          {/* pass handler to table */}
          <RequestTable data={mockRequests} onRowClick={setSelectedRequest} />
        </div>
      </div>

      {/* only show when a row is clicked */}
      {selectedRequest && (
        <EventTab
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
        />
      )}
    </div>
  );
}