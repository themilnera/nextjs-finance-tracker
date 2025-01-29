import { currencyFormatter } from "@/libs/utils";

const ExpenseItem = ({ color, title, total }) => {
  return (
    <div className="hoveranim">
        <div className="flex items-center justify-between px-4 py-4 bg-slate-700 rounded-3xl my-3">
        <div className="flex items-center gap-2">
            <div
            className="w-[25px] h-[25px] rounded-full bg-yellow-500"
            style={{ backgroundColor: color }}
            />
            <h4 className="capitalize">{title}</h4>
        </div>
        <p>{currencyFormatter(total)}</p>
        </div>
    </div>
  );
};

export default ExpenseItem;
