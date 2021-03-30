import React, { useState } from "react";

const Dropdown = ({ options, selected, onChangeSelected }) => {
  const [open, setOpen] = useState(false);
  const dropdownOptions = options.map((option) => {
    // Hide already selected option from dropdown by returning null
    if (option.color === selected.color) {
      return null;
    }

    return (
      <div
        key={option.color}
        value={option.color}
        className="item"
        onClick={() => onChangeSelected(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open && "visible active"}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open && "visible transition"}`}>
            {dropdownOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
