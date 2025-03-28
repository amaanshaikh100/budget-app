import Header from "./components/Header";
import Cards from "./components/Cards";
import { useState } from "react";
import ExpenseDashboard from "./components/ExpenseDashboard";

function App() {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  function handleIncome(newIncome) {
    setIncome((prev) => [...income, newIncome]);
  }

  function handleExpense(newExpense) {
    setExpense((prev) => [...expense, newExpense]);
  }

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <Header onHandleIncome={handleIncome} onHandleExpense={handleExpense} />
      <Cards />
      <ExpenseDashboard expense={expense} />
    </div>
  );
}

export default App;
