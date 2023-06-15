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

  const filteredData = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultSelectedValue={selectedFilterYear}
          onChangeFilter={filterChangeHandler}
        />

        {filteredData.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
