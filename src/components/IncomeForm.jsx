import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";
import { IoAddCircleOutline, IoWalletOutline } from "react-icons/io5";

function IncomeForm({ setIsOpen, onHandleIncome }) {
  const [income, setIncome] = useState(500);
  const [category, setCategory] = useState("Salary");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date());

  function handleSubmit(e) {
    e.preventDefault();

    const id = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    const newIncome = {
      id,
      income,
      category,
      note,
      date,
    };

    onHandleIncome(newIncome);

    setIncome(100);
    setCategory("Salary");
    setNote("");

    setIsOpen((prev) => !prev);
  }

  return (
    <div className="mt-4">
      <h4 className="bg-gray-100 p-2 rounded-md font-medium text-lg text-green-800">
        Income Form
      </h4>

      <form
        onSubmit={handleSubmit}
        className="mt-4 gap-4 flex flex-col justify-between"
      >
        <div className="flex gap-2">
          <div className="flex flex-col flex-1 gap-2">
            <label htmlFor="income" className="text-sm text-gray-600">
              Add Income:
            </label>
            <input
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              id="income"
              type="number"
              placeholder="Add Income..."
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
              <option value="Salary">Salary</option>
              <option value="Business">Business</option>
              <option value="Stock">Stock</option>
              <option value="Rent">Rent</option>
              <option value="Gifts">Gifts</option>
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
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="border border-slate-400 w-[100%] h-24 rounded-md resize-none outline-none p-2"
            placeholder="Add a note here..."
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

export default IncomeForm;
