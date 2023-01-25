import React, { useState } from "react";
import "./ExpenseForm.css";
export const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");
 // const [emptyInput, setEmptyInput] = useState();
  // const [userInput, setUserInput] =useState({
  //     enterTitle:'',
  //     enterAmount:'',
  //     enterDate:''
  // })
  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);

    //setUserInput({...userInput,enterTitle:event.target.value});
  };
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData)
    setEnterTitle('')
    setEnterAmount('')
    setEnterDate('')
  };
  return (
    <form >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"  value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
           value={enterDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button onClick={submitHandler}>Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
