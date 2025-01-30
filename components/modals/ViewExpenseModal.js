import Modal from "../Modal";
import { currencyFormatter } from "@/libs/utils";
import { FaRegTrashAlt } from "react-icons/fa";
import { financeContext } from "@/libs/store/finance-context";
import { useContext } from "react";
import { toast } from "react-toastify";

function ViewExpenseModal({ show, onClose, expense }) {
    const {deleteExpenseItem, deleteExpenseCategory} = useContext(financeContext);

    const deleteExpenseItemHandler = async (item)=>{
        try {
            const updatedItems = expense.items.filter((i)=> i.id !== item.id);
            const updatedExpense = {
                items: [...updatedItems],
                total: expense.total - item.amount,
            };
            await deleteExpenseItem(updatedExpense, expense.id);
            toast.success("Expense item deleted successfully!")
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    const deleteExpenseHandler = async ()=>{
        try{
            await deleteExpenseCategory(expense.id);
            toast.success("Expense category deleted successfully!")
        }
        catch(error){
            console.log(error);
            toast.error(error.message);
        }
    }
  
  
    return (
    <Modal show={show} onClose={onClose}>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl">{expense.title}</h2>
        <button className="btn btn-danger" onClick={deleteExpenseHandler}>Delete</button>
      </div>
      <div>
        <h3 className="my-4 text-2xl">Expense History</h3>
        {expense.items.map((item) => {
          return (
            <div key={item.id} className="flex items-center justify-between">
              <small>
                {item.createdAt.toMillis
                  ? new Date(item.createdAt.toMillis()).toISOString()
                  : item.createdAt.toISOString()}
              </small>
              <p className="flex items-center gap-2">
                {currencyFormatter(item.amount)}
                <button onClick={()=>{
                    deleteExpenseItemHandler(item)}}>
                  <FaRegTrashAlt />
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}

export default ViewExpenseModal;
