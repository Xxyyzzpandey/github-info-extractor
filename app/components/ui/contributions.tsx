import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

interface ChartProps {
  data: { date: string; count: number }[];
}

const ActivityChart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div className="w-full h-96 p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">GitHub Activity</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
