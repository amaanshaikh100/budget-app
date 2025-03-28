import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ExpenseDashboard({ expense }) {
  const chartData = expense.map((item) => ({
    name: item.category, // X-axis will use this
    value: Number(item.expense), // Y-axis will use this
  }));

  return (
    <div className="grid grid-cols-2 gap-4 mt-8 h-80">
      <div className="mt-2 gap-4 h-[100%] overflow-hidden">
        {/* <h2 className="text-xl font-medium text-slate-800">Expense Logs</h2> */}

        <div className="bg-white rounded-md mt-2 p-4 h-[100%] overflow-scroll">
          <ul className="flex flex-col gap-2">
            {expense.map((e) => {
              return (
                <li
                  key={e.id}
                  className="bg-gray-50 px-2 py-4 rounded-md flex flex-col justify-between gap-2"
                >
                  <span className="w-fit text-sm bg-green-200 text-green-600 px-2 rounded-lg">
                    {e.category}
                  </span>
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <p className="text-lg font-medium">${e.expense}</p>
                      <p className="text-md font-light">{e.note}</p>
                    </div>
                    <button className="text-sm bg-red-200 text-red-900 px-4 rounded-md">
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-2 h-80">
        {/* <h2 className="text-xl font-medium text-slate-800">Expense Chart</h2> */}

        <div className="h-[100%] bg-white rounded-md mt-2">
          <ResponsiveContainer width="100%" height="100%" className="-z-50">
            <AreaChart
              data={expense}
              // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="expense" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="expense"
                stroke="#2563eb"
                fill="#3b82f6"
                fillOpacity={0.8}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ExpenseDashboard;
