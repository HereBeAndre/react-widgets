import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onChangeSelected }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener(
      "click",
      (event) => {
        if (ref.current && ref.current.contains(event.target)) {
          return;
        }
        setOpen(false);
      },
      { capture: true }
    );
  }, []);

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
        style={{ color: option.color }}
        onClick={() => onChangeSelected(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
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
