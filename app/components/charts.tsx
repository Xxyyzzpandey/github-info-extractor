"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useLangStore } from "../store/store";

const COLORS = ["#FF5733", "#FFBD33", "#33FF57", "#3357FF", "#FF33A1"];

export default function PieChartComponent() {
  const { langDetails } = useLangStore();
  //console.log(langDetails); // Debugging

  // Convert data from { language, percentage } to { name, value }
  const formattedData = langDetails.map((item) => ({
    name: item.language,
    value: (item.percentage *100)/100, // Convert decimal to percentage
  }));

  return (
    <div className="flex justify-center items-center h-screen">
      {formattedData.length > 0 ? (
        <PieChart width={400} height={400}>
          <Pie
            data={formattedData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={({ name, value }) => `${name} ${value.toFixed(0)}%`}
          >
            {formattedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      ) : (
        <p className="text-center text-xl">Loading...</p>
      )}
    </div>
  );
}
