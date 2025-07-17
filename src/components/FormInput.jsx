import React from "react";

const FormInput = ({label, type, placeholder, name, defaultValue}) => {
  return (
    <div className="form-control">
      <label className="label capitalize">{label}</label>
      <input type={type} className="input w-full" name={name} placeholder={placeholder} defaultValue={defaultValue} />
    </div>
  );
};

export default FormInput;
