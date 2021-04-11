import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

import { options } from "./data";

const items = [
  {
    title: "What is React?",
    content: "React is a front end JavaScript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JavaScript library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const showComponent = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
  if (window.location.pathname === "/search") {
    return <Search />;
  }
  if (window.location.pathname === "/dropdown") {
    return (
      <Dropdown
      // selected={selected}
      // onChangeSelected={setSelected}
      // options={options}
      // label="Select a color"
      />
    );
  }
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  return <div>{showComponent()}</div>;
};

export default App;
