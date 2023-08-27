import "./authorFilter.css";
import { useState } from "react";

function AuthorFilter() {
  const author = [
    "Nero",
    "Dynoro, Outwork, Mr. Gee",
    "Ali Bakgor",
    "Стоункат, Psychopath",
    "Jaded, Will Clarke, AR/CO",
    "Blue Foundation, Zeds Dead",
    "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
    "minthaze",
    "Calvin Harris, Disciples",
    "Tom Baker",
  ];
  return (
    <ul className="popup__author">
      {author.map((element, i) => (
        <li className="popup__author-text" key={i}>
          {element}
        </li>
      ))}
    </ul>
  );
}

export default AuthorFilter;
