import React from "react";

function Paginate(props) {
  const pageNumber = [];

  for (let i; i <= Math.ceil(props.total / props.itemsPer); i++) {
    pageNumber.push(i);
  }

  return (
    <section className="container">
      <ul className="pagination"></ul>
    </section>
  );
}

export default Paginate;
