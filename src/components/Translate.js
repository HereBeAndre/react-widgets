import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { languages } from "../languages";

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
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
