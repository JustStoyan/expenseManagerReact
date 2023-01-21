import React from "react";
import { ButtonProps } from "../interfaces";

export default function Button(props: Partial<ButtonProps>) {
  return (
    <button
      className={`${
        props.className ? props.className : ""
      } bg-cyan-500 shadow-lg shadow-cyan-500/50 border-solid border-black border-2 p-2 rounded-xl`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
