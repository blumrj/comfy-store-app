import React from "react";

const FilterInput = ({ label, name, items }) => {
  return (
    <div className="my-4">
      <label className="label capitalize mb-2">{label}</label>
      <div className="filter grid sm:block gap-2">
        <input
          className="btn filter-reset"
          type="radio"
          name={name}
          aria-label="All"
        />
        {items.map((item) => {
          return (
            <input
             key={item}
              className="btn capitalize"
              type="radio"
              name={name}
              aria-label={item}
              value={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterInput;
