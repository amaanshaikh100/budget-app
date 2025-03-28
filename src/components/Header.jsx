import { useState } from "react";

import Button from "./Button";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import Logo from "./Logo";
import Modal from "./Modal";

import { IoWalletOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";

function Header({ onHandleIncome, onHandleExpense }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  function handleIncomeModal() {
    setIsOpen((prev) => !prev);
    setModalContent(
      <IncomeForm onHandleIncome={onHandleIncome} setIsOpen={setIsOpen} />
    );
  }

  function handleExpenseModal() {
    setIsOpen((prev) => !prev);
    setModalContent(
      <ExpenseForm onHandleExpense={onHandleExpense} setIsOpen={setIsOpen} />
    );
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between">
      <Logo />

      <div className="flex gap-2">
        <Button
          onClick={handleIncomeModal}
          type="income"
          icon={<FaRegMoneyBillAlt className="text-green-800" size={12} />}
        >
          Income
        </Button>

        <Button
          onClick={handleExpenseModal}
          type="expense"
          icon={<IoWalletOutline className="text-blue-800" size={12} />}
        >
          Expense
        </Button>
      </div>

      {isOpen ? (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {modalContent}
        </Modal>
      ) : null}
    </div>
  );
}

export default Header;
