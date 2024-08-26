import React from "react";
import { useForm } from "react-hook-form";
import "../styles/login.css";

export const Input = (props) => {
  const { value, onChange, id, name, label, type } = props;
  return (
    <div className="field">
      <label htmlFor={id}>{label}: </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
