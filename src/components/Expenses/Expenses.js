import ExpenseItem from "./ExpenseItem";
import React from "react";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((e) => (
        <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
      ))}
    </Card>
  );
}

export default Expenses;
