import { useState } from "react";

import { currencyFormatter } from "@/libs/utils";
import ViewExpenseModal from "./modals/ViewExpenseModal";

const ExpenseItem = ({ expense }) => {
  const [showViewExpenseModal, setShowViewExpenseModal] = useState(false);

  return (
    <>
      <ViewExpenseModal
        show={showViewExpenseModal}
        onClose={setShowViewExpenseModal}
        expense={expense}
      />
      <button
        onClick={() => {
          setShowViewExpenseModal(true);
        }}
      >
        <div className="hoveranim">
          <div className="flex items-center justify-between px-4 py-4 bg-slate-700 rounded-3xl my-2">
            <div className="flex items-center gap-2">
              <div
                className="w-[25px] h-[25px] rounded-full bg-yellow-500"
                style={{ backgroundColor:expense.color }}
              />
              <h4 className="capitalize">{expense.title}</h4>
            </div>
            <p>{currencyFormatter(expense.total)}</p>
          </div>
        </div>
      </button>
    </>
  );
};

export default ExpenseItem;
