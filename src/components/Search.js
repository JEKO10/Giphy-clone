import React, { useState, useEffect } from "react";

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
      `${api.base}search?&api_key=${api.key}&q=ronaldo`
    );
    const data = await response.json();
    console.log(data);
    setSearchData(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  const renderSearch = () => {
    return searchData.map((item) => {
      return (
        <div key={item.id} className="gif">
          <img src={item.images.fixed_height.url} alt="GIF" />
        </div>
      );
    });
  };

  return <div className="container">{renderSearch()}</div>;
}

export default Search;
