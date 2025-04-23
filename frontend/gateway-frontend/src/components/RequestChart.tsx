import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "11:00", success: 5, error: 1 },
  { name: "15:00", success: 8, error: 0 },
  { name: "19:00", success: 4, error: 2 },
];

export function RequestChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888" />
        <Tooltip />
        <Bar dataKey="success" stackId="a" fill="#00ff88" />
        <Bar dataKey="error" stackId="a" fill="#ff4444" />
      </BarChart>
    </ResponsiveContainer>
  );
}
