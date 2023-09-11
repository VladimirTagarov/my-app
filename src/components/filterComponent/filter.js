import AuthorFilter from "../FilterAuthorComponent/AuthorFilter";
import GenreFilter from "../FilterGenreComponent/GenreFilter";
import YearFilter from "../FilterYearComponent/yearFilter";
import "./filter.css";
import { useState } from "react";
import * as S from "./filter.styles";

function Filter() {
  const [open, setOpen] = useState(false);

  const popup = () => {
    setOpen(!open);
    setOpenPopup(false);
    setOpenYear(false);
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

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.Popup>
        <S.FilterButton onClick={popup} className="_btn-text">
          исполнителю
        </S.FilterButton>
        {open ? <AuthorFilter /> : null}
      </S.Popup>
      <S.Popup>
        <S.FilterButton onClick={popupYear} className="_btn-text">
          году выпуска
        </S.FilterButton>
        {openYear ? <YearFilter /> : null}
      </S.Popup>
      <S.Popup>
        <S.FilterButton onClick={popupGenre} className="_btn-text">
          жанру
        </S.FilterButton>
        {openPopup ? <GenreFilter /> : null}
      </S.Popup>
    </S.CenterblockFilter>
  );
}

export default Filter;
