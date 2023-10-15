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
import { getTracks } from "../../api";

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
    url("./fonts/StratosSkyeng.woff2") format("woff2"),
    url("./fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
`;

export const Main = () => {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState();
  const [playingTrack, setPlayingTrack] = useState(null);
  const [addPlayerError, setAddPlayerError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    getTracks()
      .then((track) => {
        setTracks(track);
      })
      .catch((error) => {
        setAddPlayerError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
    console.log(tracks);
  }, []);

  return (
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
                <Content
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  tracks={tracks}
                  playingTrack={playingTrack}
                  setPlayingTrack={setPlayingTrack}
                />
              )}
              <p>{addPlayerError}</p>
            </S.MainCenterblock>
            {loading ? <SidebarSkeleton /> : <Sidebar />}
          </S.Main>
          <S.Bar
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            tracks={tracks}
            playingTrack={playingTrack}
            setPlayingTrack={setPlayingTrack}
          >
            {playingTrack ? (
              <Bar
                tracks={tracks}
                playingTrack={playingTrack}
                setPlayingTrack={setPlayingTrack}
              />
            ) : null}
          </S.Bar>
          <S.Footer></S.Footer>
        </S.Container>
      </S.Wrapper>
    </div>
  );
};
