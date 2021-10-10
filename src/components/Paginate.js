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
          let active = "";
          if (item === props.currentPage) {
            active += "active";
          }
          return (
            <li className={active}>
              <a
                className={active}
                onClick={() => {
                  props.selectedPage(item);
                }}
                href="!#"
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
