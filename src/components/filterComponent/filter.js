import AuthorFilter from "../FilterAuthorComponent/AuthorFilter";
import GenreFilter from "../FilterGenreComponent/GenreFilter";
import YearFilter from "../FilterYearComponent/yearFilter";
import "./filter.css";
import { useState } from "react";

function Filter() {
  const [open, setOpen] = useState(false);

  const popup = () => {
    setOpen(!open);
    setOpenPopup(false);
    setOpenYear(false);
    // console.log("clicked");
  };
  const [openPopup, setOpenPopup] = useState(false);
  const popupGenre = () => {
    setOpenPopup(!openPopup);
    setOpenYear(false);
    setOpen(false);
  };
  const [openYear, setOpenYear] = useState(false);
  const popupYear = () => {
    setOpenYear(!openYear);
    setOpen(false);
    setOpenPopup(false);
  };
  // const author = [
  //   "Nero",
  //   "Dynoro, Outwork, Mr. Gee",
  //   "Ali Bakgor",
  //   "Стоункат, Psychopath",
  //   "Jaded, Will Clarke, AR/CO",
  //   "Blue Foundation, Zeds Dead",
  //   "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
  //   "minthaze",
  //   "Calvin Harris, Disciples",
  //   "Tom Baker",
  // ];
  // const year = [1992, 1993, 1994];
  // const genre = [
  //   "Рок",
  //   "Хип-Хоп",
  //   "Поп-музыка",
  //   "Техно",
  //   "Инди",
  //   "Металл",
  //   "Классическая музыка",
  // ];

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="popup">
        <div onClick={popup} className="filter__button button-author _btn-text">
          исполнителю
        </div>
        {open ? <AuthorFilter /> : null}
      </div>
      <div className="popup">
        <div
          onClick={popupYear}
          className="filter__button button-year _btn-text"
        >
          году выпуска
        </div>
        {openYear ? <YearFilter /> : null}
      </div>
      <div className="popup">
        <div
          onClick={popupGenre}
          className="filter__button button-genre _btn-text"
        >
          жанру
        </div>
        {openPopup ? <GenreFilter /> : null}
      </div>
    </div>
  );
}

export default Filter;
