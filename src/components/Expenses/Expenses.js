import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./NewExpense/ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    console.log("From Expenses.js", selectedYear);
    setSelectedFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter
          defaultSelectedValue={selectedFilterYear}
          onChangeFilter={filterChangeHandler}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.title}
          />
        ))}
        
      </Card>
    </div>
  );
};

export default Expenses;
