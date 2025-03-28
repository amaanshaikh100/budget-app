import { useState } from "react";
import DatePicker from "react-datepicker";
import Button from "./Button";
import { IoAddCircleOutline } from "react-icons/io5";

function ExpenseForm({ setIsOpen, onHandleExpense }) {
  const [expense, setExpense] = useState(100);
  const [category, setCategory] = useState("Entertainment");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date());

  function handleSubmit(e) {
    e.preventDefault();

    const id = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");

    const newExpense = {
      id,
      expense,
      category,
      note,
      date,
    };

    onHandleExpense(newExpense);

    setIsOpen((prev) => !prev);
  }

  return (
    <div className="mt-4">
      <h4 className="bg-gray-100 p-2 rounded-md font-medium text-lg text-green-800">
        Expense Form
      </h4>

      <form
        onSubmit={handleSubmit}
        className="mt-4 gap-4 flex flex-col justify-between"
      >
        <div className="flex gap-2">
          <div className="flex flex-col flex-1 gap-2">
            <label htmlFor="expense" className="text-sm text-gray-600">
              Add Exepense:
            </label>
            <input
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              id="expense"
              type="number"
              placeholder="Add Exepnse..."
              className="border border-slate-500 px-1 py-2 rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 justify-between">
            <label htmlFor="category" className="text-sm text-gray-600">
              Category:
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              className="bg-slate-800 text-white h-[100%] px-2 rounded-md"
            >
              <option value="Entertainment">Entertainment</option>
              <option value="Food">Food & Drinks</option>
              <option value="Gifts">Gifts</option>
              <option value="Health">Health & Fitness</option>
              <option value="Shopping">Shopping</option>
            </select>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-gray-600 mb-2">Pick a date:</h4>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="MM/dd/yyyy"
            className="border p-2 rounded-md bg-slate-800 text-white cursor-pointer"
          />
        </div>

        <div>
          <h4>Note: </h4>
          <textarea
            className="border border-slate-400 w-[100%] h-24 rounded-md resize-none outline-none p-2"
            placeholder="Add a note here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className="w-full flex justify-end">
          <Button
            type="income"
            icon={<IoAddCircleOutline className="text-green-800" size={12} />}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
