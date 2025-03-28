function Button({ children, icon, type, onClick }) {
  const baseStyle =
    "flex items-center w-24 justify-between gap-2 text-sm px-2 text-white py-1.5 rounded-md";
  const incomeIconClass = "bg-green-400 p-1.5 rounded-full";
  const expenseIconClass = "bg-blue-400 p-1.5 rounded-full";
  const incomeBtn = "bg-green-600";
  const expenseBtn = "bg-blue-700";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${type === "income" ? incomeBtn : expenseBtn}`}
    >
      <span
        className={
          type === "income" ? `${incomeIconClass}` : `${expenseIconClass}`
        }
      >
        {icon}
      </span>
      {children}
    </button>
  );
}
export default Button;
