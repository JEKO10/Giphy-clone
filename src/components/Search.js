import React, { useState } from "react";
import Loader from "./Loader";

const api = {
  base: "https://api.giphy.com/v1/gifs/",
  key: "Orrjo8OK56xS6F5tlU1dRG3fPzrO2agN",
};

function Search(props) {
  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearch = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${api.base}search?&api_key=${api.key}&q=${query}`
      );
      const data = await response.json();
      setSearchData(data.data);
      setIsLoading(false);
    } catch (err) {
      throw err;
    }
  };

  const renderSearch = () => {
    if (isLoading) {
      return <Loader />;
    }
    return searchData.map((item) => {
      return (
        <div key={item.id} className="gif">
          <img src={item.images.fixed_height_downsampled.url} alt="GIF" />
        </div>
      );
    });
  };

  return (
    <div className="container">
      <section className="search">
        <input
          type="text"
          placeholder="Search for gifs..."
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            fetchSearch();
            setQuery("");
            props.func(true);
          }}
        >
          <img src="https://giphy.com/static/img/search-icon.svg" alt="IMG" />
        </button>
      </section>

      {props.state ? (
        <div className="container">
          {!isLoading && searchData.length === 0 ? (
            <h1 id="error">Oops! There’s nothing here.</h1>
          ) : (
            ""
          )}
          {renderSearch()}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
