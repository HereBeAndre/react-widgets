import React from "react";

const Dropdown = ({ options }) => {
  const dropdownOptions = options.map((item) => {
    return (
      <option key={item.color} value={item.color}>
        {item.label}
      </option>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon">
            <div className="text">Select Color</div>
            <div className="menu visible transition">{dropdownOptions}</div>
          </i>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
