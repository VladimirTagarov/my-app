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
import { getTracks, getFavoritesTracks } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlaylist } from "../../store/reducers/tracksReducer";
import { ContentFavorites } from "../../components/contentComponent/contentFavorite";

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

export const Favorites = ({ tracks, setTracks, playingTrack, setPlayingTrack, trackIndex, setTrackIndex, isPlaying, setIsPlaying, favoritesTracks, setFavoritesTracks, setIsLiked, isLiked}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  // const [tracks, setTracks] = useState();
  // const [favoritesTracks, setFavoritesTracks] = useState();
  // const playingTrackFromStore = useSelector((state) => state.track)
  // const [playingTrack, setPlayingTrack] = useState(playingTrackFromStore);
  const [addPlayerError, setAddPlayerError] = useState(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [trackIndex, setTrackIndex] = useState(null);
  const addPlayingTrack = () => dispatch(setPlayingTrack(playingTrack));
  // addPlayingTrack();
  const addCurrentPlaylist = () => dispatch(setCurrentPlaylist(tracks));
  useEffect(() => {
    addCurrentPlaylist()
  }, [addCurrentPlaylist, playingTrack]);




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
    getFavoritesTracks()
    .then((favoritesTrack) => {
      setFavoritesTracks(favoritesTrack);
      console.log(favoritesTrack);
    })

  }, []);

   
      // .catch((error) => {
      //   setAddPlayerError(error.message);
      // })
      // .finally(() => {
      //   setLoading(false);
      // });


  return (
    <div>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNav />
            <S.MainCenterblock>
              <Search />
              <S.Centerblock>Мои треки</S.Centerblock>
              <Filter />
             
              {/* <Content
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  tracks={tracks}
                  playingTrack={playingTrack}
                  setPlayingTrack={setPlayingTrack}
                  trackIndex={trackIndex}
                  setTrackIndex={setTrackIndex}
                /> */}
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
                />
              {/* <p>{addPlayerError}</p> */}
            </S.MainCenterblock>
            {loading ? <SidebarSkeleton /> : <Sidebar />}
          </S.Main>
          <S.Bar
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            tracks={tracks}
            playingTrack={playingTrack}
            setPlayingTrack={setPlayingTrack}
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
          >
            {playingTrack ? (
              <Bar
              isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                tracks={tracks}
                playingTrack={playingTrack}
                setPlayingTrack={setPlayingTrack}
                trackIndex={trackIndex}
                setTrackIndex={setTrackIndex}
              />
            ) : null}
          </S.Bar>
          <S.Footer></S.Footer>
        </S.Container>
      </S.Wrapper>
    </div>
  );
};
