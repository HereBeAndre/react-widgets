import React, { useState } from "react";
import wikipedia from "../api/wikipedia";

const Search = () => {
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  const onSearch = async (term) => {
    const response = await wikipedia.get("", {
      params: {
        action: "query",
        list: "search",
        srsearch: term,
        format: "json",
        origin: "*",
      },
    });
    console.log(response);
    setResults(response.data.query.search);
  };

  console.log(results);

  const renderResults = results.map((result) => {
    return (
      <div className="item" key={result.pageId}>
        <i className="large github middle aligned icon"></i>
        <div className="content">
          <h3 className="header">{result.title}</h3>
          <div className="description">{result.snippet}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <input
            type="text"
            placeholder="Search for..."
            onChange={onInputChange}
          ></input>
        </div>
      </div>
      <div className="ui relaxed divided list">{renderResults}</div>
    </div>
  );
};

export default Search;
