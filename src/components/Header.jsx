import { IoWalletOutline } from "react-icons/io5";
import Button from "./Button";
import Logo from "./Logo";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIncome() {
    setIsOpen((prev) => !prev);
  }

  function handleExpense() {
    console.log("expense click");
  }

  return (
    <div className="flex justify-between">
      <Logo />

      <div className="flex gap-2">
        <Button
          onClick={handleIncome}
          type="income"
          icon={<FaRegMoneyBillAlt className="text-green-800" size={12} />}
        >
          Income
        </Button>
        <Button
          onClick={handleExpense}
          type="expense"
          icon={<IoWalletOutline className="text-blue-800" size={12} />}
        >
          Expense
        </Button>
      </div>

      {isOpen ? (
        <div className="fixed w-[100%] mx-auto inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-[50%] h-[80vh] p-6 rounded-lg">
            <h2>Add Income</h2>
            <button onClick={() => setIsOpen((prev) => !prev)}>Close</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
