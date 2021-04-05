import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onChangeSelected }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  console.log(selected);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    // Return clean up function
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
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
        <p style={{ color: selected.color }}>{selected.label}</p>
      </div>
    </div>
  );
};

export default Dropdown;
