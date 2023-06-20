import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData.date);
    const expenseData = {
      ...enteredExpenseData,
      amount: +enteredExpenseData.amount,
      id: enteredExpenseData.title,
    };
    console.log("ExpenseData from NewExpense: ", expenseData);
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add new</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStop={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
