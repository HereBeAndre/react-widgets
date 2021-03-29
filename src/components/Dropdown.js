import React from "react";

const Dropdown = ({ options }) => {
  const dropdownItems = options.map((item) => {
    return (
      <option key={item.color} value={item.color}>
        {item.label}
      </option>
    );
  });
  return <select className="ui dropdown">{dropdownItems}</select>;
};

export default Dropdown;
