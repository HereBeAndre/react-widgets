import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onChangeSelected, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    // Return clean up function
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const dropdownOptions = options.map((option) => {
    // Hide already selected option from dropdown by returning null
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        value={option.value}
        className="item"
        style={{ color: option.value }}
        onClick={() => onChangeSelected(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
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
        <p style={{ color: selected.value }}>{selected.label}</p>
      </div>
    </div>
  );
};

export default Dropdown;
