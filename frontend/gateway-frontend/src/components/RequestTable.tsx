const rows = [
  { date: "2025-04-23 10:44:27", status: 200, conn: "nfeio → invoice-creation-success", attempts: 1 },
  { date: "2025-04-23 10:39:14", status: 200, conn: "nfeio → invoice-creation-success", attempts: 1 },
];

export function RequestTable() {
  return (
    <table className="w-full text-sm text-left">
      <thead className="text-slate-400 border-b border-slate-700">
        <tr>
          <th className="py-2">Event Date</th>
          <th>Status</th>
          <th>Connection</th>
          <th>Attempts</th>
          <th>Next Attempt</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-b border-slate-800 hover:bg-slate-800 transition">
            <td className="py-2">{r.date}</td>
            <td>
              <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">200</span>
            </td>
            <td>
              <span className="bg-slate-700 px-2 py-1 rounded">{r.conn}</span>
            </td>
            <td>{r.attempts}</td>
            <td>–</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
