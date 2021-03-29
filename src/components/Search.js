import React, { useEffect, useState } from "react";
import wikipedia from "../api/wikipedia";

const Search = () => {
  const [term, setTerm] = useState("colnago");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  const onInputChange = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  // useEffect to update debouncedTerm when user enters a term
  useEffect(() => {
    // Use timeoutId to clearTimeout for delaying call based on user input
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    // return callback to clearTimeout (clear timeout if user is still typing - 1" threshold above)
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const response = await wikipedia.get("", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(response.data.query.search);
    };

    debouncedTerm && search();
  }, [debouncedTerm]);

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
