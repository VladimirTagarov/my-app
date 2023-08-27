import "./genreFilter.css";
import { useState } from "react";

function GenreFilter() {
  const genre = [
    "Рок",
    "Хип-Хоп",
    "Поп-музыка",
    "Техно",
    "Инди",
    "Металл",
    "Классическая музыка",
  ];
  return (
    <ul className="popup__genre">
      {genre.map((element, i) => (
        <li className="popup__genre-text" key={i}>
          {element}
        </li>
      ))}
    </ul>
  );
}

export default GenreFilter;
