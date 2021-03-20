import React from "react";
import wikipedia from "./api/wikipedia";
import Accordion from "./components/Accordion";

const searchTerm = "Turing";

const onSearch = async (term) => {
  const response = await wikipedia.get("?srsearch", {
    params: {
      // action: "query",
      // list: "search",
      srsearch: term,
      // format: "json"
    },
  });
  console.log(response);
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
      <button onClick={() => onSearch(searchTerm)}>Click me!</button>
    </div>
  );
};

export default App;
