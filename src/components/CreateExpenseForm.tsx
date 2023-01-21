import React, { useState } from "react";
import Button from "./Button";
import FormField from "./FormField";

export default function ExpenseForm() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const changeCategoryHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    setCategory((prev) => (prev = e.target.value));
  };

  const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName((prev) => (prev = e.target.value));
  };

  const changeAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount((prev) => (prev = e.target.value));
  };

  const submitFormHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = {
      category,
      name,
      amount,
    };

    console.log(formData);

    fetch("http://localhost:5000/api/expenses/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div className="flex flex-col flex-wrap justify-start gap-5 ">
      <form className="flex flex-grow flex-col flex-wrap gap-2">
        <FormField
          type="text"
          name="expense-category"
          labelName="Expense Category"
          onChange={changeCategoryHandler}
          value={category}
        />
        <FormField
          type="text"
          name="expense-name"
          labelName="Expense Name"
          onChange={changeNameHandler}
          value={name}
        />
        <FormField
          type="text"
          name="expense-amount"
          labelName="Expense Amount"
          onChange={changeAmountHandler}
          value={amount}
        />
      </form>
      <Button
        onClick={submitFormHandler}
        className="w-32  self-center flex-grow "
        type="button"
      >
        Create
      </Button>
    </div>
  );
}
