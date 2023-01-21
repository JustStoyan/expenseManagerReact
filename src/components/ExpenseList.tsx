import React, { useState } from "react";
import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react";
import { ExpenseData, DataFromExpenses } from "../interfaces";
import Expense from "./Expense";

const ExpenseList: React.FC = () => {
  const { isLoading, data }: UseQueryResult<DataFromExpenses, Error> = useQuery<
    DataFromExpenses,
    Error,
    DataFromExpenses,
    string
  >("expenses", async () => {
    const res = await fetch("http://localhost:5000/api/expenses");
    return res.json();
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap flex-row justify-center items-center overflow-y-auto">
      <>
        <div></div>
        <div>
          <h3>Expense Category</h3>
          {data?.map((expense: ExpenseData) => {
            return (
              <Expense
                key={expense.expense_id}
                category={expense.expense_category}
              />
            );
          })}
        </div>
        <div>
          <h3>Expense Name</h3>
          {data?.map((expense: ExpenseData) => {
            return (
              <Expense key={expense.expense_id} name={expense.expense_name} />
            );
          })}
        </div>
        <div>
          <h3>Expense Amount</h3>
          {data?.map((expense: ExpenseData) => {
            return (
              <Expense
                key={expense.expense_id}
                amount={expense.expense_amount}
              />
            );
          })}
        </div>
        {data && data?.length !== 0
          ? data.map((expense: ExpenseData) => {
              return (
                <Expense
                  key={expense.expense_id}
                  category={expense.expense_category}
                  name={expense.expense_name}
                  amount={expense.expense_amount}
                />
              );
            })
          : "no expenses"}
      </>
    </div>
  );
};

export default ExpenseList;
