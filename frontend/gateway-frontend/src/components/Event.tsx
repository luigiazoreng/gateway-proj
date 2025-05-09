import { useState } from "react";
import { RequestType } from "../types";
type Props = {
  request: RequestType;
  onClose: () => void;
};

export default function EventTab({ request, onClose }: Props) {
  const [activeTab, setActiveTab] = useState("Request");
  return (
    <aside className="w-80 h-screen bg-gray-900 text-white flex flex-col p-2">
      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-lg font-bold">Event</h1>
        <button className="text-gray-400 hover:text-gray-200" onClick={onClose}>
          Close
        </button>
      </div>

      {/* Status section */}
      <div className="flex items-start flex-col justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 bg-green-500 rounded-full"></span>
          <span className="font-bold text-green-400">200</span>
        </div>
        <button className="text-sm text-blue-400 hover:underline">
          View Metadata
        </button>
      </div>
      {/* Tabs */}
      <div className="flex border-b border-gray-700 mb-4">
        {["Request", "Response"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-400 text-blue-400"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="space-y-6">
        {/* Headers Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Headers</h2>
          <div className="bg-gray-800 p-4 rounded-lg text-sm space-y-2">
            <div>
              <span className="font-bold">content-length:</span> 9849
            </div>
            <div>
              <span className="font-bold">content-type:</span> application/json;
              charset=utf-8
            </div>
          </div>
        </div>

        {/* Body Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Body</h2>
          <div className="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
            <pre>{`
                  {
                    "Id": 148612,
                    "Type": 2,
                    "Subject": "[ON-GRID] Falha de relé - LKH0A520AQ",
                    "Status": "S4 - COLETA REVERSA"
                  }
            `}</pre>
          </div>
        </div>
      </div>
    </aside>
  );
}
