import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*
  //one state only
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    /*
    //one state only
    setUserInput({ ...userInput, enteredTitle: event.target.value });

    //when updating a state that depends on the previous state, an alternative form should be used
    //This guarantees that the prevState will always be the latest one (safer way)
    
    setUserInput((prevState)=> {
      return {...prevState,  enteredTitle: event.target.value}
    });
    */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, //number conversion from string
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onCancel();
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions-align">
        <button type="reset">cancel</button>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
