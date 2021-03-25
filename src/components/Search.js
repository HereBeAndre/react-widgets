import React, { useEffect, useState } from "react";
import wikipedia from "../api/wikipedia";

const Search = () => {
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  useEffect(() => {
    const search = async () => {
      const response = await wikipedia.get("", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(response.data.query.search);
    };

    if (term) {
      // TO AVOID ERROR ON FIRST RENDER (when term is "");
      search();
    }
  }, [term]);

  console.log(results);

  const renderResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="blank"
          >
            Go
          </a>
        </div>
        <div className="content">
          <h3 className="header">{result.title}</h3>
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
            value={term}
            onChange={onInputChange}
          ></input>
        </div>
      </div>
      <div className="ui celled list">{renderResults}</div>
    </div>
  );
};

export default Search;
