import React from "react";
import { useState } from "react/cjs/react.development";
import Giphy from "./components/Giphy";
import Search from "./components/Search";
import Paginate from "./components/Paginate";

function App() {
  const [searched, setSearched] = useState(false);
  return (
    <main>
      <Search func={setSearched} state={searched} />
      <Paginate />
      {searched ? null : <Giphy />}
    </main>
  );
}

export default App;
