import React, { useEffect } from "react";
import AuthorFilter from "../FilterAuthorComponent/AuthorFilter";
import GenreFilter from "../FilterGenreComponent/GenreFilter";
import YearFilter from "../FilterYearComponent/yearFilter";
import { useState } from "react";
import * as S from "./filter.styles";
import { getTracks } from "../../api";

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
  countOfTogglesGenre,
  setCountOfTogglesGenre,
  isClickedGenre,
  setIsClickedGenre,
  checkedGenre,
  setCheckedGenre,
  sortTracksGenre,
  setSortTracksGenre,
  isSortOn,
  setIsSortOn,
  sortirizedTracks,
  setSortirizedTracks,
}) {
  const [open, setOpen] = useState(false);
  const [activeAuthors, setActiveAuthors] = useState(null);
  const [activeGenres, setActiveGenres] = useState(null);
  const [activeSort, setActiveSort] = useState("по умолчанию");
  console.log(checkedAuthors);
  console.log("sortTracks: " + sortTracks);

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

  console.log("count: " + countOfToggles);
  console.log("есть ли клик?: " + isClicked);

  const year = ["по умолчанию", "сначала старые", "сначала новые"];
  let arrayOfAuthors = [];
  let sortArrayOfAuthors = [];
  let genreArray = [];
  let sortGenre = [];
  // let sortTracks = [];
  genreArray = tracks.map((track) => track.genre);
  sortGenre = genreArray.filter(
    (item, index) => genreArray.indexOf(item) === index
  );
  arrayOfAuthors = tracks.map((track) => track.author);
  sortArrayOfAuthors = arrayOfAuthors.filter(
    (item, index) => arrayOfAuthors.indexOf(item) === index && item !== "-"
  );

  useEffect(() => {
    getTracks().then((tracks) => {
      setTracks(tracks);
    });
  }, [isClicked, isClickedGenre, isSortOn]);

  const toggleAuthors = (authorsId) => {
    setIsClicked(true);
    setActiveAuthors(authorsId);
    console.log("sortTracks " + sortTracks);
    setTracks(tracks);
    console.log(authorsId);
    console.log("массив: " + checkedAuthors);

    if (checkedAuthors.includes(authorsId)) {
      setCheckedAuthors(checkedAuthors.filter((e) => e !== authorsId));
      setCountOfToggles(checkedAuthors.length - 1);
      setSortTracks(
        (sortTracks = tracks.filter((track) =>
          checkedAuthors.includes(track.author)
        ))
      );

      // setSortTracks(sortTracks);
      console.log(sortTracks);

      // console.log(countOfToggles);
    } else {
      setCheckedAuthors((authors) => [...authors, authorsId]);
      setCountOfToggles(checkedAuthors.length + 1);
      // console.log(countOfToggles);
      setSortTracks(
        (sortTracks = tracks.filter((track) =>
          checkedAuthors.includes(track.author)
        ))
      );
      console.log(sortTracks);
    }

    if (checkedAuthors.length > 0) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }

    // sortTracks = tracks.filter((track) =>
    //   checkedAuthors.includes(track.author)
    // );
    // console.log(sortTracks);
    // setSortTracks(sortTracks);
  };

  const toggleGenres = (genresId) => {
    setActiveGenres(genresId);
    console.log(genresId);

    if (checkedGenre.length > 0) {
      setIsClickedGenre(true);
    } else {
      setIsClickedGenre(false);
    }

    if (checkedGenre.includes(genresId)) {
      setCheckedGenre(checkedGenre.filter((e) => e !== genresId));
      setCountOfTogglesGenre(checkedGenre.length - 1);
      // console.log(countOfToggles);
    } else {
      setCheckedGenre((genres) => [...genres, genresId]);
      setCountOfTogglesGenre(checkedGenre.length + 1);
      // console.log(countOfToggles);
    }

    sortTracksGenre = tracks.filter((track) =>
      checkedGenre.includes(track.genre)
    );
    console.log(sortTracksGenre);
    setSortTracksGenre(sortTracksGenre);
  };

  const toggleSortirize = (sortirize) => {
    setActiveSort(sortirize);
    console.log("isSortOn: " + isSortOn);
    console.log("activeSort: " + activeSort);
    if (activeSort === "по умолчанию") {
      setIsSortOn(false);
      setTracks(tracks);
    } else if (activeSort === "сначала старые") {
      setIsSortOn(true);
      setIsClickedGenre(false);
      setIsClicked(false);
      setCountOfToggles(0);
      setCountOfTogglesGenre(0);
      setTracks(sortirizedTracks);
      setCheckedAuthors([]);
      setCheckedGenre([]);
      sortirizedTracks = tracks.sort(function (a, b) {
        if (a.release_date > b.release_date) {
          return 1;
        }
        if (a.release_date < b.release_date) {
          return -1;
        }
        return 0;
      });
      setSortirizedTracks(sortirizedTracks);
      console.log(sortirizedTracks);
    } else {
      setIsSortOn(true);
      setIsClickedGenre(false);
      setCountOfToggles(0);
      setCountOfTogglesGenre(0);
      setIsClicked(false);
      setTracks(sortirizedTracks);
      setCheckedAuthors([]);
      setCheckedGenre([]);
      sortirizedTracks = tracks.sort(function (a, b) {
        if (a.release_date < b.release_date) {
          return 1;
        }
        if (a.release_date > b.release_date) {
          return -1;
        }
        return 0;
      });
      setSortirizedTracks(sortirizedTracks);
      console.log(sortirizedTracks);
    }
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
                  onClick={(authorsId) => {
                    // setCheckedAuthors((authors) => [...authors, authorsId]);
                    console.log("этот же массив при клике: " + checkedAuthors);
                    toggleAuthors(author);
                    // if (checkedAuthors.length > 0) {
                    //   setIsClicked(true);
                    // } else {
                    //   setIsClicked(false);
                    // }
                    // setSortTracks(sortTracks);
                    // setIsClicked(true);

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
        <S.FilterButton onClick={popupGenre} className="_btn-text">
          жанру
        </S.FilterButton>
        {openPopup ? (
          <S.PopupGenre>
            {sortGenre.map(
              //   (element, i) => (
              //   <S.PopupGenreText className="popup__genre-text" key={i}>
              //     {element}
              //   </S.PopupGenreText>
              // )
              (genre, i) => {
                return (
                  <S.PopupGenreText
                    key={i}
                    onClick={() => {
                      toggleGenres(genre);
                      // setIsClicked(!isClicked);
                      setSortTracksGenre(sortTracksGenre);
                      console.log(genre + "fff");
                      console.log("счет: " + countOfTogglesGenre);
                    }}
                  >
                    {checkedGenre.includes(genre) ? (
                      <S.PopupAuthorTextActive>{genre}</S.PopupAuthorTextActive>
                    ) : (
                      <S.PopupAuthorTextPassive>
                        {genre}
                      </S.PopupAuthorTextPassive>
                    )}
                  </S.PopupGenreText>
                );
              }
            )}
          </S.PopupGenre>
        ) : null}
      </S.Popup>
      {countOfTogglesGenre ? (
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
            {countOfTogglesGenre}
          </div>
        </>
      ) : null}
      <div
        style={{
          marginLeft: "400px",
        }}
      >
        Сортировка по:{" "}
      </div>
      <S.Popup>
        <S.FilterButton onClick={popupYear} className="_btn-text">
          {activeSort}
        </S.FilterButton>
        {openYear ? (
          <S.PopupYear>
            {year.map((element, i) =>
              element === activeSort ? (
                <S.PopupYearTextActive
                  key={i}
                  onClick={() => {
                    toggleSortirize(element);
                  }}
                >
                  {element}
                </S.PopupYearTextActive>
              ) : (
                <S.PopupYearText
                  key={i}
                  onClick={() => {
                    toggleSortirize(element);
                  }}
                >
                  {element}
                </S.PopupYearText>
              )
            )}
          </S.PopupYear>
        ) : null}
      </S.Popup>
    </S.CenterblockFilter>
  );
}

export default Filter;
