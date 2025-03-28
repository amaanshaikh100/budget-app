import React from "react";
import { AiTwotoneBank } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

function Cards({ expense, income }) {
  const totalExpense = expense.reduce((sum, i) => {
    return sum + Number(i.expense);
  }, 0);
  const totalIncome = income.reduce((sum, i) => {
    return sum + Number(i.income);
  }, 0);
  const balance = totalIncome - totalExpense;

  return (
    <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 sm:gap-6">
      {/* card 1 */}
      <div className="bg-white p-4 flex items-center gap-2 rounded-md">
        <span className="bg-green-100 p-3 rounded-full">
          <MdOutlineAccountBalanceWallet size={24} className="text-green-800" />
        </span>
        <div>
          <h2 className="text-xs text-gray-600 font-medium">Current Balance</h2>
          <h3 className="text-lg">${balance}</h3>
        </div>
      </div>

      {/* card 2 */}
      <div className="bg-white p-4 flex items-center gap-2 rounded-md">
        <span className="bg-yellow-100 p-3 rounded-full">
          <FaRegMoneyBillAlt size={24} className="text-yellow-800" />
        </span>
        <div>
          <h2 className="text-xs text-gray-600 font-medium">Total Expense</h2>
          <h3 className="text-lg">${totalExpense}</h3>
        </div>
      </div>

      {/* card 3 */}

      <div className="bg-white p-4 flex items-center gap-2 rounded-md">
        <span className="bg-red-100 p-3 rounded-full">
          <MdOutlineAccountBalanceWallet size={24} className="text-red-800" />
        </span>
        <div>
          <h2 className="text-xs text-gray-600 font-medium">Total Spendings</h2>
          <h3 className="text-lg">12,000</h3>
        </div>
      </div>

      {/* card 4 */}

      <div className="bg-white p-4 flex items-center gap-2 rounded-md">
        <span className="bg-blue-100 p-3 rounded-full">
          <AiTwotoneBank size={24} className="text-blue-800" />
        </span>
        <div>
          <h2 className="text-xs text-gray-600 font-medium">Total Income</h2>
          <h3 className="text-lg">${totalIncome}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;
