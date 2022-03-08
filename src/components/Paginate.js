import React from "react";

function Paginate({ currentPage, itemsPer, selectedPage, total }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(total / itemsPer); i++) {
    pageNumber.push(i);
  }

  return (
    <section className="container">
      <ul className="pagination">
        {pageNumber.map((item) => {
          let active = "";
          if (item === currentPage) {
            active += "active";
          }
          return (
            <li className={active} key={item}>
              <a
                className={active}
                onClick={() => {
                  selectedPage(item);
                }}
                href="#"
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Paginate;
