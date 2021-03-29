import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const App = () => {
  return (
    <div>
      <Search />
      <Accordion items={items} />
      <Dropdown options={options} />
    </div>
  );
};

export default App;
