import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  disabled: boolean;
  type: string;
  className: string;
  onClick: any;
}

interface FormFieldProps {
  type: string;
  name: string;
  className: string;
  placeholder: string;
  required: boolean;
  disabled: boolean;
  labelName: string;
  onChange: any;
  value: string;
}

interface DataFromExpenses {
  data: [];
  map: Function;
  length: number;
}

interface ExpenseData {
  expense_id: string;
  expense_category: string;
  expense_name: string;
  expense_amount: string;
}

export type { ButtonProps, FormFieldProps, ExpenseData, DataFromExpenses };
