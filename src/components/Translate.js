import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { languages } from "../languages";

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  return (
    <div>
      <Dropdown
        options={languages}
        selected={language}
        onChangeSelected={setLanguage}
        label="Select a language"
      ></Dropdown>
    </div>
  );
};

export default Translate;
