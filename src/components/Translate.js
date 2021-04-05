import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { languages as options } from "../languages";

const Translate = () => {
  return (
    <div>
      <Dropdown options={options}></Dropdown>
    </div>
  );
};

export default Translate;
