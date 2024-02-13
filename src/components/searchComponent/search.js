import React from "react";
import * as S from "./search.styles";
import { getTracks } from "../../api";

function Search({
  tracks,
  setTracks,
  findedTracks,
  setFindedTracks,
  isTrackfinded,
  setIsTrackfinded,
}) {
  const findTracks = (e) => {
    findedTracks = tracks;
    findedTracks = tracks.filter(
      (item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.author.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFindedTracks(findedTracks);
    // setIsTrackfinded(true);
    console.log(e.target.value);
    console.log(findedTracks);
    if (e.target.value) {
      setIsTrackfinded(true);
    } else {
      setIsTrackfinded(false);
    }
    // getTracks()
    //   .then((tracks) => {
    //     setTracks(tracks);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //     // })
    //     // .finally(() => {
    //     //   setLoading(false);
    //   });
    return tracks;
  };

  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        type="search"
        onChange={findTracks}
        placeholder="Поиск"
        name="search"
      />
    </S.CenterblockSearch>
  );
}

export default Search;
