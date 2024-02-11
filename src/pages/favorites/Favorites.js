import React from "react";
import * as S from "./Main.style";
import { useState } from "react";
import { useEffect } from "react";
import MainNav from "../../components/mainNavComponent/MainNav";
import Search from "../../components/searchComponent/search";
import Filter from "../../components/filterComponent/filter";
import Content from "../../components/contentComponent/content";
import ContentSkeleton from "../../components/contentSkeletonComponent/ContentSkeleton";
import Sidebar from "../../components/sidebarComponent/sidebar";
import SidebarSkeleton from "../../components/sidebarSkeletonComponent/sidebarSkeleton";
import Bar from "../../components/barComponent/bar";
import { createGlobalStyle } from "styled-components";
import { getTracks, getFavoritesTracks, getDisLikes } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlaylist } from "../../store/reducers/tracksReducer";
import { ContentFavorites } from "../../components/contentComponent/contentFavorite";
import { useNavigate } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
button,
._btn {
  cursor: pointer;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
  background-color: #181818
}
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("../../../public/fonts/StratosSkyeng.woff2") format("woff2"),
    url("../../../public/fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
`;

export const Favorites = ({
  tracks,
  setTracks,
  playingTrack,
  loading,
  setLoading,
  setPlayingTrack,
  trackIndex,
  setTrackIndex,
  isPlaying,
  setIsPlaying,
  favoritesTracks,
  setFavoritesTracks,
  setIsLiked,
  isLiked,
  playlist,
  duration,
  setDuration,
  progressTime,
  setProgressTime,
  isTrackfinded,
  setIsTrackfinded,
  filtredTracks,
  setFiltredTracks,
  findedTracks,
  setFindedTracks,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addPlayerError, setAddPlayerError] = useState(null);
  const addPlayingTrack = () => dispatch(setPlayingTrack(playingTrack));

  useEffect(() => {
    getFavoritesTracks(localStorage.access)
      .then((favoritesTracks) => {
        setFavoritesTracks(favoritesTracks);
        console.log(favoritesTracks);
      })
      .catch((error) => {
        // console.log("ошибка доступа");
        if (
          error.message === "Данный токен недействителен для любого типа токена"
        ) {
          console.log(error.message);
          navigate("/login", { replace: true });
          return;
        }
        setAddPlayerError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [favoritesTracks]);

  return (
    <div>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNav />
            <S.MainCenterblock>
              <Search
                tracks={tracks}
                setTracks={setTracks}
                findedTracks={findedTracks}
                setFindedTracks={setFindedTracks}
                isTrackfinded={isTrackfinded}
                setIsTrackfinded={setIsTrackfinded}
              />
              <S.Centerblock>Мои треки</S.Centerblock>
              {/* <Filter
                tracks={tracks}
                setTracks={setTracks}
                countOfToggles={countOfToggles}
                setCountOfToggles={setCountOfToggles}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                checkedAuthors={checkedAuthors}
                setCheckedAuthors={setCheckedAuthors}
              /> */}

              {!favoritesTracks ? (
                <ContentSkeleton />
              ) : isTrackfinded ? (
                <ContentFavorites
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  tracks={findedTracks}
                  favoritesTracks={findedTracks}
                  setFavoritesTracks={setFavoritesTracks}
                  playingTrack={playingTrack}
                  setPlayingTrack={setPlayingTrack}
                  trackIndex={trackIndex}
                  setTrackIndex={setTrackIndex}
                  playlist={playlist}
                  isLiked={isLiked}
                  setIsLiked={setIsLiked}
                  duration={duration}
                  setDuration={setDuration}
                  progressTime={progressTime}
                  setProgressTime={setProgressTime}
                  loading={loading}
                  setLoading={setLoading}
                  setAddPlayerError={setAddPlayerError}
                />
              ) : (
                <ContentFavorites
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  tracks={tracks}
                  favoritesTracks={favoritesTracks}
                  setFavoritesTracks={setFavoritesTracks}
                  playingTrack={playingTrack}
                  setPlayingTrack={setPlayingTrack}
                  trackIndex={trackIndex}
                  setTrackIndex={setTrackIndex}
                  playlist={playlist}
                  isLiked={isLiked}
                  setIsLiked={setIsLiked}
                  duration={duration}
                  setDuration={setDuration}
                  progressTime={progressTime}
                  setProgressTime={setProgressTime}
                />
              )}
              {/* <p>{addPlayerError}</p> */}
            </S.MainCenterblock>
            {loading ? <SidebarSkeleton /> : <Sidebar />}
          </S.Main>
          <S.Footer></S.Footer>
        </S.Container>
      </S.Wrapper>
    </div>
  );
};
