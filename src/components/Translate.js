import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { languages as options } from "../languages";

console.log(options);

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  return (
    <div>
      <Dropdown
        options={options}
        selected={language}
        onChangeSelected={setLanguage}
      ></Dropdown>
    </div>
  );
};

export default Translate;
