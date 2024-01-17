import React from "react";
import * as S from "./Main.style";

import MainNav from "../../components/mainNavComponent/MainNav";
import Search from "../../components/searchComponent/search";
import Filter from "../../components/filterComponent/filter";
import ContentCategory from "../../components/contentComponent/contentCategory";
import ContentSkeleton from "../../components/contentSkeletonComponent/ContentSkeleton";
import Sidebar from "../../components/sidebarComponent/sidebar";
import SidebarSkeleton from "../../components/sidebarSkeletonComponent/sidebarSkeleton";
import { createGlobalStyle } from "styled-components";

import { category } from "../../components/sidebarComponent/sidebar";
import { useParams } from "react-router-dom";

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

export const Category = (
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
  setLoading,
  addPlayerError,
  playingTrackFromStore,
  playlist,
  duration,
  setDuration,
  progressTime,
  setProgressTime
) => {
  console.log(tracks);
  console.log(Array.isArray(tracks));
  const params = useParams();
  const categoryFromUrl = category.find((id) => id === Number(params.id));

  return (
    <div>
      <div>
        <GlobalStyle />
        <S.Wrapper>
          <S.Container>
            <S.Main>
              <MainNav />
              <S.MainCenterblock>
                <Search />
                <S.Centerblock>Треки</S.Centerblock>
                <Filter />
                {loading ? (
                  <ContentSkeleton />
                ) : (
                  <ContentCategory
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
                    setLoading={setLoading}
                    loading={loading}
                  />
                )}
                <p>{addPlayerError}</p>
              </S.MainCenterblock>
            </S.Main>

            <S.Footer></S.Footer>
          </S.Container>
        </S.Wrapper>
      </div>
      {/* <h1>Здесь будут списки по </h1>
      <h1>категории: {categoryFromUrl}</h1> */}
    </div>
  );
};
