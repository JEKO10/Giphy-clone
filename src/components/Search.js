import React, { useEffect, useState } from "react";

const api = {
  base: "https://api.giphy.com/v1/gifs/",
  key: "Orrjo8OK56xS6F5tlU1dRG3fPzrO2agN",
};

function Search() {
  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearch = async () => {
    setIsLoading(true);
    const response = await fetch(
      `${api.base}search?&api_key=${api.key}&q=${query}`
    );
    const data = await response.json();
    console.log(data);
    setSearchData(data.data);
    setIsLoading(false);
  };

  const renderSearch = () => {
    return searchData.map((item) => {
      return (
        <div key={item.id} className="gif">
          <img src={item.images.fixed_height.url} alt="GIF" />
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
            console.log(searchData);
          }}
        >
          Search
        </button>
      </section>
      <div className="container">{renderSearch()}</div>
    </div>
  );
}

export default Search;
