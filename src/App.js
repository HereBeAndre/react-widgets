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

const showComponent = (route, component) => {
  if (window.location.pathname === route) {
    return component;
  }
};

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {showComponent("/", <Accordion items={items} />)}
      {showComponent("/search", <Search />)}
      {showComponent(
        "/dropdown",
        <Dropdown
        // selected={selected}
        // onChangeSelected={setSelected}
        // options={options}
        // label="Select a color"
        />
      )}
      {showComponent("/translate", <Translate />)}
    </div>
  );
};

export default App;
