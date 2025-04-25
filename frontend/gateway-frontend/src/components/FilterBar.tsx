export function FilterBar() {
  return (
    <div className="bg-[#1e212c] p-3 rounded-md flex flex-wrap gap-2 border border-slate-700">
      {[
        "Date",
        "Request",
        "Connections",
        "Sources",
        "Destinations",
        "Status",
        "HTTP Response",
        "Attempts",
        "CLI Users",
      ].map((item) => (
        <span
          key={item}
          className="bg-[#2b2f3c] px-2 py-1 rounded text-blue-400 border border-blue-600 text-sm"
        >
          + {item}
        </span>
      ))}
      <button className="ml-auto bg-black text-white text-xs px-3 py-1 rounded">
        Recent Filters ▾
      </button>
    </div>
  );
}
