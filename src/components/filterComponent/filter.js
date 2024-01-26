import React from "react";
import AuthorFilter from "../FilterAuthorComponent/AuthorFilter";
import GenreFilter from "../FilterGenreComponent/GenreFilter";
import YearFilter from "../FilterYearComponent/yearFilter";
import { useState } from "react";
import * as S from "./filter.styles";

function Filter({
  tracks,
  setTracks,
  countOfToggles,
  setCountOfToggles,
  isClicked,
  setIsClicked,
  checkedAuthors,
  setCheckedAuthors,
  sortTracks,
  setSortTracks,
}) {
  const [open, setOpen] = useState(false);
  // const [countOfToggles, setCountOfToggles] = useState(0);
  // const [isClicked, setIsClicked] = useState(false);
  const [activeAuthors, setActiveAuthors] = useState(null);
  // const [checkedAuthors, setCheckedAuthors] = useState([]);

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

  let arrayOfAuthors = [];
  let sortArrayOfAuthors = [];
  // let sortTracks = [];
  arrayOfAuthors = tracks.map((track) => track.author);
  console.log("клик был: " + isClicked);
  // console.log(arrayOfAuthors);
  sortArrayOfAuthors = arrayOfAuthors.filter(
    (item, index) => arrayOfAuthors.indexOf(item) === index && item !== "-"
  );
  console.log("а вот и наш массив: " + sortTracks);
  // console.log(sortArrayOfAuthors);
  const toggleAuthors = (authorsId) => {
    setActiveAuthors(authorsId);
    console.log(authorsId);

    if (checkedAuthors.includes(authorsId)) {
      setCheckedAuthors(checkedAuthors.filter((e) => e !== authorsId));
      setCountOfToggles(checkedAuthors.length - 1);
      // console.log(countOfToggles);
    } else {
      setCheckedAuthors((authors) => [...authors, authorsId]);
      setCountOfToggles(checkedAuthors.length + 1);
      // console.log(countOfToggles);
    }
    if (checkedAuthors.length > 0) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }

    sortTracks = tracks.filter((track) =>
      checkedAuthors.includes(track.author)
    );
    console.log(sortTracks);
    setSortTracks(sortTracks);
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
            {sortArrayOfAuthors.map((author, i) => {
              return (
                <S.PopupAuthorText
                  key={i}
                  style={{
                    color:
                      isClicked && activeAuthors === author ? "red" : "white",
                  }}
                  onClick={() => {
                    toggleAuthors(author);
                    // setIsClicked(!isClicked);
                    console.log(author + "fff");
                    console.log(countOfToggles);
                  }}
                >
                  {checkedAuthors.includes(author) ? (
                    <S.PopupAuthorTextActive>{author}</S.PopupAuthorTextActive>
                  ) : (
                    <S.PopupAuthorTextPassive>
                      {author}
                    </S.PopupAuthorTextPassive>
                  )}
                </S.PopupAuthorText>
              );
            })}
          </S.PopupAuthor>
        ) : null}
      </S.Popup>
      {countOfToggles ? (
        <>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "relative",
              zIndex: "3",
              top: "-15px",
              left: "-25px",
              gap: "0px",
            }}
          >
            <ellipse cx="13" cy="12.75" rx="13" ry="12.75" fill="#AD61FF" />
          </svg>
          <div
            style={{
              position: "relative",
              zIndex: "4",
              top: "-16px",
              left: "-52px",
            }}
          >
            {countOfToggles}
          </div>
        </>
      ) : null}
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
