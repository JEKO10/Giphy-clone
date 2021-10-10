import React from "react";

function Paginate(props) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(props.total / props.itemsPer); i++) {
    pageNumber.push(i);
  }

  return (
    <section className="container">
      <ul className="pagination">
        {pageNumber.map((item) => {
          return (
            <li>
              <a href="!#">{item}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Paginate;
