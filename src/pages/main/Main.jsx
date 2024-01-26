import React from "react";
import * as S from "./Main.style";

import MainNav from "../../components/mainNavComponent/MainNav";
import Search from "../../components/searchComponent/search";
import Filter from "../../components/filterComponent/filter";
import Content from "../../components/contentComponent/content";
import ContentSkeleton from "../../components/contentSkeletonComponent/ContentSkeleton";
import Sidebar from "../../components/sidebarComponent/sidebar";
import SidebarSkeleton from "../../components/sidebarSkeletonComponent/sidebarSkeleton";
import { createGlobalStyle } from "styled-components";

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

export const Main = ({
  tracks,
  setTracks,
  playingTrack,
  setPlayingTrack,
  trackIndex,
  setTrackIndex,
  isPlaying,
  setIsPlaying,
  favoritesTracks,
  setFavoritesTracks,
  setIsLiked,
  isLiked,
  loading,
  addPlayerError,
  playingTrackFromStore,
  playlist,
  duration,
  setDuration,
  progressTime,
  setProgressTime,
  findedTracks,
  setFindedTracks,
  isTrackfinded,
  setIsTrackfinded,
  countOfToggles,
  setCountOfToggles,
  isClicked,
  setIsClicked,
  checkedAuthors,
  setCheckedAuthors,
  sortTracks,
  setSortTracks,
}) => {
  console.log(tracks);
  console.log(Array.isArray(tracks));

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
              <S.Centerblock>Треки</S.Centerblock>
              <Filter
                tracks={tracks}
                setTracks={setTracks}
                countOfToggles={countOfToggles}
                setCountOfToggles={setCountOfToggles}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                checkedAuthors={checkedAuthors}
                setCheckedAuthors={setCheckedAuthors}
                sortTracks={sortTracks}
                setSortTracks={setSortTracks}
              />
              {loading ? (
                <ContentSkeleton />
              ) : isTrackfinded ? (
                <Content
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  tracks={findedTracks}
                  setTracks={setTracks}
                  playingTrack={playingTrack}
                  setPlayingTrack={setPlayingTrack}
                  trackIndex={trackIndex}
                  setTrackIndex={setTrackIndex}
                  isLiked={isLiked}
                  setIsLiked={setIsLiked}
                  playingTrackFromStore={playingTrackFromStore}
                  playlist={playlist}
                  countOfToggles={countOfToggles}
                  setCountOfToggles={setCountOfToggles}
                  isClicked={isClicked}
                  setIsClicked={setIsClicked}
                  checkedAuthors={checkedAuthors}
                  setCheckedAuthors={setCheckedAuthors}
                />
              ) : isClicked ? (
                <Content
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  tracks={sortTracks}
                  setTracks={setTracks}
                  playingTrack={playingTrack}
                  setPlayingTrack={setPlayingTrack}
                  trackIndex={trackIndex}
                  setTrackIndex={setTrackIndex}
                  isLiked={isLiked}
                  setIsLiked={setIsLiked}
                  playingTrackFromStore={playingTrackFromStore}
                  playlist={playlist}
                />
              ) : (
                <Content
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  tracks={tracks}
                  setTracks={setTracks}
                  playingTrack={playingTrack}
                  setPlayingTrack={setPlayingTrack}
                  trackIndex={trackIndex}
                  setTrackIndex={setTrackIndex}
                  isLiked={isLiked}
                  setIsLiked={setIsLiked}
                  playingTrackFromStore={playingTrackFromStore}
                  playlist={playlist}
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
