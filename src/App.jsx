import Header from "./components/Header";
import Cards from "./components/Cards";
import { useState } from "react";
import ExpenseDashboard from "./components/ExpenseDashboard";
import IncomeAndExpenseChart from "./components/IncomeAndExpenseChart";

function App() {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  function handleIncome(newIncome) {
    setIncome((prev) => [...income, newIncome]);
  }

  function handleExpense(newExpense) {
    setExpense((prev) => [...expense, newExpense]);
  }

  function handleDeleteExpense(id) {
    setExpense((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <Header onHandleIncome={handleIncome} onHandleExpense={handleExpense} />
      <Cards expense={expense} income={income} />
      <ExpenseDashboard
        onDeleteExpense={handleDeleteExpense}
        expense={expense}
        setExpense={setExpense}
      />
      <IncomeAndExpenseChart income={income} />
    </div>
  );
}

export default App;
