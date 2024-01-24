import React, { useState, useEffect } from "react";
import * as S from "./Content.style";
import {
  getDisLikes,
  getFavoritesTracks,
  getLikes,
  getTracks,
} from "../../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPlaylist } from "../../store/reducers/tracksReducer";
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

export const ContentFavorites = ({
  tracks,
  setTracks,
  favoritesTracks,
  setFavoritesTracks,
  playingTrack,
  setPlayingTrack,
  isPlaying,
  setIsPlaying,
  trackIndex,
  setTrackIndex,
  isLiked,
  setIsLiked,
  duration,
  setDuration,
}) => {
  console.log(favoritesTracks);
  console.log(Array.isArray(favoritesTracks));

  // console.log(playingTrack);
  // console.log(isPlaying);
  // const [arrOfFavoritesTracks, setArrOfFavoritesTracks] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameOfUser = localStorage.getItem("user");
  // console.log(nameOfUser);
  const arrOfFavoritesTracks = tracks?.filter((track) => {
    return track.stared_user.some((user) => user.username === nameOfUser);
  });

  // const addCurrentPlaylist = () => dispatch(setCurrentPlaylist(tracks))
  // console.log(arrOfFavoritesTracks);

  //   useEffect(() => {
  //   getFavoritesTracks()
  //   .then((favoritesTracks) => {
  //     setFavoritesTracks(favoritesTracks)
  //     // console.log(arrOfFavoritesTracks);
  //   });
  // });

  const toggleDisLike = async (toggleTrackId) => {
    // console.log(arrOfFavoritesTracks);
    setIsLiked(!isLiked);
    getDisLikes(localStorage.access, toggleTrackId).then(() => {
      getTracks()
        .then((track) => {
          setTracks(track);
          // window.location.reload(true);
        })
        .catch((error) => {
          if (error.status === 401) {
            localStorage.clear();
            navigate("/login", { replace: true });
          }
        });
      // window.location.reload(true);
      // getFavoritesTracks()
      //   .then((favoritesTrack) => {
      //     setFavoritesTracks(favoritesTrack);
      //     // window.location.reload(true);
      //   })
      //   .catch((error) => {
      //     if (error.status === 401) {
      //       localStorage.clear();
      //       navigate("/login", { replace: true });
      //     }
      //   });
    });
  };

  // console.log(favoritesTracks);

  return (
    <S.CenterBlockContent>
      <S.ContentTitle>
        <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
        <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
        <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
        <S.PlaylistTitleCol04>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </S.PlaylistTitleSvg>
        </S.PlaylistTitleCol04>
      </S.ContentTitle>

      <S.ContentPlaylist>
        {favoritesTracks?.map((track, index) => {
          return (
            <S.PlaylistItem key={track.id}>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage
                    onClick={() => {
                      setPlayingTrack(track);
                      isPlaying = true;
                      setIsPlaying(!isPlaying);
                      setTrackIndex(index);
                      setCurrentPlaylist(favoritesTracks);
                    }}
                  >
                    {track === playingTrack && isPlaying ? (
                      <S.PlayingDotActive>
                        <S.TrackTitleSvg alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.TrackTitleSvg>
                      </S.PlayingDotActive>
                    ) : track === playingTrack && !isPlaying ? (
                      <S.PlayingDotActivePause>
                        <S.TrackTitleSvg alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.TrackTitleSvg>
                      </S.PlayingDotActivePause>
                    ) : (
                      <S.PlayingDot>
                        <S.TrackTitleSvg alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.TrackTitleSvg>
                      </S.PlayingDot>
                    )}
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink
                      onClick={() => {
                        setPlayingTrack(track);
                        isPlaying = true;
                        setIsPlaying(!isPlaying);
                        setTrackIndex(index);
                        setCurrentPlaylist(favoritesTracks);
                      }}
                    >
                      {track.name} <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSvg
                    alt="time"
                    onClick={() => {
                      toggleDisLike(track.id);
                    }}
                  >
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z"
                        fill="#B672FF"
                      />
                      <path
                        d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052"
                        stroke="#B672FF"
                      />
                    </svg>

                    {/* 
{((arrOfFavoritesTracks?.includes(track))) ? (<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z" fill="#B672FF"/>
<path d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052" stroke="#B672FF"/>
</svg>) : (<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052" stroke="#ACACAC"/>
</svg>
)

                    } */}
                  </S.TrackTimeSvg>
                  <S.TrackTimeText>
                    {Math.floor(track.duration_in_seconds / 60) +
                      ":" +
                      (track.duration_in_seconds % 60)}
                  </S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
          );
        })}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
};

export default ContentFavorites;
