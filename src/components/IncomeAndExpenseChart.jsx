import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function IncomeAndExpenseChart({ income }) {
  return (
    <div className="h-80 grid grid-cols-1 bg-red-500 overflow-hidden">
      <div className="h-[100%] bg-white rounded-md p-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={income}
            // margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              tickFormatter={(date) =>
                new Date(date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <YAxis />
            <Tooltip />
            <Legend wrapperStyle={{ paddingTop: "20px" }} />

            <Area
              type="monotone"
              dataKey="income"
              name="Income"
              stroke="#10b981"
              fill="#a7f3d0"
              fillOpacity={0.4}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default IncomeAndExpenseChart;
