import React from "react";

export default function Expense(props: any) {
  return (
    <div className="flex flex-wrpa flex-row gap-4">
      {props.category && <p>{props.category}</p>}
      {props.name && <p>{props.name}</p>}
      {props.amount && <p>{props.amount + " лв"}</p>}
    </div>
  );
}
