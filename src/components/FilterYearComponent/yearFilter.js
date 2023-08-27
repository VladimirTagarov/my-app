import "./yearFilter.css";
import { useState } from "react";

function YearFilter() {
  const year = [1992, 1993, 1994];
  return (
    <ul className="popup__year">
      {year.map((element, i) => (
        <li className="popup__year-text" key={i}>
          {element}
        </li>
      ))}
    </ul>
  );
}

export default YearFilter;
