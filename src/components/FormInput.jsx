import React from "react";

const FormInput = ({label, type, placeholder, name, defaultValue, size}) => {
  const sizeClass = size ? `input-${size}` : ''
  return (
    <div className="form-control">
      <label className="label capitalize mr-4 mb-2">{label}</label>
      <input type={type} className={`input w-full ${sizeClass}`} name={name} placeholder={placeholder} defaultValue={defaultValue} />
    </div>
  );
};

export default FormInput;
