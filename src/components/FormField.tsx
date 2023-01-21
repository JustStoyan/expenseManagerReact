import React from "react";
import { FormFieldProps } from "../interfaces";

export default function FormField(props: Partial<FormFieldProps>) {
  return (
    <div className="flex flex-col justify-start content-center gap-1">
      <label htmlFor={props.name}>{props.labelName}</label>
      <input
        type={props.type}
        name={props.name}
        disabled={props.disabled}
        required={props.required}
        placeholder={props.placeholder}
        className={`p-1 text-black ${props.className}`}
        onChange={props.onChange}
      />
    </div>
  );
}
