import React from "react";

const ToggleInput = ({label, name}) => {
  return (
    <div className="my-4">
    <label className="label capitalize mr-4" htmlFor={name}>{label}</label>
      <label className="toggle text-base-content">
        <input type="checkbox" name={name} value={true} />
        <svg
          aria-label="disabled"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        <svg
          aria-label="enabled"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            stroke="currentColor"
          >
            <path d="M20 6 9 17l-5-5"></path>
          </g>
        </svg>
      </label>
    </div>
  );
};

export default ToggleInput;
