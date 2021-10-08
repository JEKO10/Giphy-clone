import React, { useState, useEffect } from "react";

const api = {
  base: "https://api.giphy.com/v1/gifs/",
  key: "dc6zaTOxFJmzC",
  topic: {
    search: "search",
    trending: "trending",
  },
};

function Giphy() {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    const response = await fetch(
      `${api.base}${api.topic.trending}?api_key=${api.key}`
    );
    const data = await response.json();
    setTrending(data);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  console.log(trending);

  return <div></div>;
}

export default Giphy;
