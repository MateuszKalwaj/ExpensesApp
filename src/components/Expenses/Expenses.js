import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./NewExpense/ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setSelectedFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilterYear;
  });

  let expensesContent = <p style={{fontSize: "24px", backgroundColor: "yellow"}}>No content found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultSelectedValue={selectedFilterYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
