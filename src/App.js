import React from "react";
import Accordion from "./components/Accordion";
// import wikipedia from "../api/wikipedia";

const searchTerm = "Turing";

const onSearch = async (term) => {
  // const response = await wikipedia.get('?srsearch');
};

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
      <Accordion items={items} />
    </div>
  );
};

export default App;
