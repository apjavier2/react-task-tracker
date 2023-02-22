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

  {
    /*This filters the list before rendering*/
  }
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  {
    /*This checks if there are no items for the filteredYear*/
  }
  let expensesContent = <p>No Expenses Found. </p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((e) => (
      <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        ></ExpenseFilter>
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
