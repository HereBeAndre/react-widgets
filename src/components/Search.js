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

  const renderResults = results.map((result) => {
    return (
      <div class="item">
        <i class="large github middle aligned icon"></i>
        <div class="content">
          <a class="header">Semantic-Org/Semantic-UI</a>
          <div class="description">Updated 10 mins ago</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="ui action input">
        <input
          type="text"
          placeholder="Search..."
          onChange={onInputChange}
        ></input>
        <button className="ui button" onClick={() => onSearch(term)}>
          <i className="search icon"></i>Search
        </button>
      </div>
      <div class="ui relaxed divided list">{renderResults}</div>
    </>
  );
};

export default Search;
