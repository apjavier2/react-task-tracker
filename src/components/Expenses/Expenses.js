import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        ></ExpenseFilter>
        {filteredExpenses.map((e) => (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
