import React from "react";
import AuthorFilter from "../FilterAuthorComponent/AuthorFilter";
import GenreFilter from "../FilterGenreComponent/GenreFilter";
import YearFilter from "../FilterYearComponent/yearFilter";
import { useState } from "react";
import * as S from "./filter.styles";

function Filter({ tracks, setTracks }) {
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

  const toggleAuthors = (authorsId) => {
    console.log(authorsId);
    // setCountOfToggles(countOfToggles + 1);
  };

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.Popup>
        <S.FilterButton onClick={popup} className="_btn-text">
          исполнителю
        </S.FilterButton>
        {open ? (
          // <AuthorFilter tracks={tracks} setTracks={setTracks} /> :
          <S.PopupAuthor>
            {tracks.map((track, i) => {
              return (
                <S.PopupAuthorText
                  key={track.id}
                  onClick={() => {
                    toggleAuthors(track);
                  }}
                >
                  <div>{track.author}</div>
                </S.PopupAuthorText>
              );
            })}
          </S.PopupAuthor>
        ) : null}
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
