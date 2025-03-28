import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function getCategoryColors(category) {
  const colorMap = {
    Food: "bg-green-100 text-green-800",
    Gifts: "bg-blue-100 text-blue-800",
    Entertainment: "bg-purple-100 text-purple-800",
    Shopping: "bg-yellow-100 text-yellow-800",
    Health: "bg-red-100 text-red-800",
  };

  return colorMap[category] || "bg-gray-100 text-gray-800"; // Default for unknown categories
}

function ExpenseDashboard({ expense, onDeleteExpense }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-2 mb-8 h-80">
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
                  <span className="text-xs font-medium text-gray-400">
                    Date: {e.date.toLocaleDateString()}
                  </span>
                  <span
                    className={`w-fit text-sm px-2 rounded-lg ${getCategoryColors(
                      e.category
                    )}`}
                  >
                    {/* bg-green-200 text-green-600 */}
                    {e.category}
                  </span>
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <p className="text-xl font-medium">${e.expense}.00</p>
                      <p className="text-md font-light">
                        Note: {e.note === "" ? "No notes are added" : e.note}
                      </p>
                    </div>
                    <button
                      onClick={() => onDeleteExpense(e.id)}
                      className="text-sm bg-red-200 text-red-900 px-4 rounded-md"
                    >
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
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={expense}
              // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="expense"
                stroke="#2563eb"
                fill="#3b82f6"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ExpenseDashboard;
