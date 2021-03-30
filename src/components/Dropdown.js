import React from "react";

const Dropdown = ({ options, selected, onChangeSelected }) => {
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
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{dropdownOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
