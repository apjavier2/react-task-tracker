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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        ></ExpenseFilter>
        {props.items.map((e) => (
          <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
