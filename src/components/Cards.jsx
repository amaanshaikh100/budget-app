import React from "react";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

function Cards() {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* card 1 */}
      <div className="bg-white p-4 flex items-center gap-2 rounded-md">
        <span className="bg-green-100 p-3 rounded-full">
          <MdOutlineAccountBalanceWallet size={24} className="text-green-800" />
        </span>
        <div>
          <h2 className="text-xs text-gray-600 font-medium">Balance</h2>
          <h3 className="text-lg">12,000</h3>
        </div>
      </div>

      {/* card 2 */}
      <div className="bg-white p-4 flex items-center gap-2 rounded-md">
        <span className="bg-yellow-100 p-3 rounded-full">
          <MdOutlineAccountBalanceWallet
            size={24}
            className="text-yellow-800"
          />
        </span>
        <div>
          <h2 className="text-xs text-gray-600 font-medium">Expense</h2>
          <h3 className="text-lg">4,000</h3>
        </div>
      </div>

      {/* card 3 */}

      <div className="bg-white p-4 flex items-center gap-2 rounded-md">
        <span className="bg-red-100 p-3 rounded-full">
          <MdOutlineAccountBalanceWallet size={24} className="text-red-800" />
        </span>
        <div>
          <h2 className="text-xs text-gray-600 font-medium">Total Spendings</h2>
          <h3 className="text-lg">42,000</h3>
        </div>
      </div>

      {/* card 4 */}

      <div className="bg-white p-4 flex items-center gap-2 rounded-md">
        <span className="bg-blue-100 p-3 rounded-full">
          <MdOutlineAccountBalanceWallet size={24} className="text-blue-800" />
        </span>
        <div>
          <h2 className="text-xs text-gray-600 font-medium">Total Income</h2>
          <h3 className="text-lg">73,000</h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;
