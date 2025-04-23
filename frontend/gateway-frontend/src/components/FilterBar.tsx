export function FilterBar() {
  return (
    <div className="bg-[#1e212c] p-3 rounded-md flex flex-wrap items-center gap-2 text-sm border border-slate-700">
      {["Date", "Request", "Connections", "Sources", "Destinations", "Status", "HTTP Response", "Attempts", "CLI Users"].map((f) => (
        <span key={f} className="bg-[#2b2f3c] px-2 py-1 rounded text-blue-400 border border-blue-600">
          + {f}
        </span>
      ))}

      <div className="ml-auto">
        <button className="text-xs text-gray-400 hover:text-white">Recent Filters ▾</button>
      </div>
    </div>
  );
}