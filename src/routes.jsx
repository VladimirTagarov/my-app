import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/Main.jsx";
import { NotFound } from "./pages/not-found/NotFound";
import { Login } from "./pages/login/Login.jsx";
import { Registration } from "./pages/registration/Registration.jsx";
import { Favorites } from "./pages/favorites/Favorites";
import { Category } from "./pages/category/Category";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute.jsx";
import Bar from "./components/barComponent/bar.js";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTracks, getFavoritesTracks } from "./api.js";
import { setCurrentPlaylist } from "./store/reducers/tracksReducer";
import ContentFavorites from "./components/contentComponent/contentFavorite.js";

export const AppRoutes = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [favoritesTracks, setFavoritesTracks] = useState([]);
  const playingTrackFromStore = useSelector((state) => state.track);
  const [playingTrack, setPlayingTrack] = useState(playingTrackFromStore);
  const [addPlayerError, setAddPlayerError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progressTime, setProgressTime] = useState(0);
  const [findedTracks, setFindedTracks] = useState([]);
  const [isTrackfinded, setIsTrackfinded] = useState(false);

  const addPlayingTrack = () => dispatch(setPlayingTrack(playingTrack));
  // addPlayingTrack();
  // const addCurrentPlaylist = () => dispatch(setCurrentPlaylist(tracks));
  // useEffect(() => {
  //   addCurrentPlaylist()
  // }, [addCurrentPlaylist, playingTrack]);
  const addCurrentPlaylist = () => {
    window.location.pathname === "/"
      ? dispatch(setCurrentPlaylist(tracks))
      : dispatch(setCurrentPlaylist(favoritesTracks));
  };
  useEffect(() => {
    addCurrentPlaylist();
  }, [playingTrack]);

  let playlist = tracks;
  playlist = useSelector((state) => state.tracks.currentPlaylist);

  useEffect(() => {
    getTracks()
      .then((tracks) => {
        setTracks(tracks);
      })
      .catch((error) => {
        setAddPlayerError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(tracks);

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
  }, []);

  // useEffect(() => {
  //   getFavoritesTracks()
  //     .then((favoritesTrack) => {
  //       setFavoritesTracks(favoritesTrack);
  //       console.log('favoritesTrack');
  //     })
  //     .catch((error) => {
  //       // console.log("ошибка доступа");
  //       if (error.status === 401){
  //         console.log("Авторизуйтесь");
  //         navigate("/login", { replace: false });
  //       }
  //       setAddPlayerError(error.message);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });

  // }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAllowed={Boolean(user)}>
              <Main
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                tracks={tracks}
                setTracks={setTracks}
                playingTrack={playingTrack}
                setPlayingTrack={setPlayingTrack}
                trackIndex={trackIndex}
                setTrackIndex={setTrackIndex}
                favoritesTracks={favoritesTracks}
                setFavoritesTracks={setFavoritesTracks}
                isLiked={isLiked}
                setIsLiked={setIsLiked}
                loading={loading}
                addPlayerError={addPlayerError}
                playingTrackFromStore={playingTrackFromStore}
                playlist={playlist}
                duration={duration}
                setDuration={setDuration}
                progressTime={progressTime}
                setProgressTime={setProgressTime}
                findedTracks={findedTracks}
                setFindedTracks={setFindedTracks}
                isTrackfinded={isTrackfinded}
                setIsTrackfinded={setIsTrackfinded}
              />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route
          path="/favorites"
          element={
            <ProtectedRoute isAllowed={Boolean(user)}>
              <Favorites
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                tracks={tracks}
                setTracks={setTracks}
                playingTrack={playingTrack}
                setPlayingTrack={setPlayingTrack}
                trackIndex={trackIndex}
                setTrackIndex={setTrackIndex}
                favoritesTracks={favoritesTracks}
                setFavoritesTracks={setFavoritesTracks}
                isLiked={isLiked}
                setIsLiked={setIsLiked}
                playingTrackFromStore={playingTrackFromStore}
                playlist={playlist}
                loading={loading}
                setLoading={setLoading}
                duration={duration}
                setDuration={setDuration}
                progressTime={progressTime}
                setProgressTime={setProgressTime}
              />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/category/:id"
          element={
            <ProtectedRoute isAllowed={Boolean(user)}>
              <Category
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                tracks={tracks}
                setTracks={setTracks}
                playingTrack={playingTrack}
                setPlayingTrack={setPlayingTrack}
                trackIndex={trackIndex}
                setTrackIndex={setTrackIndex}
                favoritesTracks={favoritesTracks}
                setFavoritesTracks={setFavoritesTracks}
                isLiked={isLiked}
                setIsLiked={setIsLiked}
                loading={loading}
                setLoading={setLoading}
                addPlayerError={addPlayerError}
                playingTrackFromStore={playingTrackFromStore}
                playlist={playlist}
                duration={duration}
                setDuration={setDuration}
                progressTime={progressTime}
                setProgressTime={setProgressTime}
              />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {playingTrack ? (
        <Bar
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          tracks={tracks}
          playingTrack={playingTrack}
          setPlayingTrack={setPlayingTrack}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          favoritesTracks={favoritesTracks}
          setFavoritesTracks={setFavoritesTracks}
          isLiked={isLiked}
          setIsLiked={setIsLiked}
          playlist={playlist}
          duration={duration}
          setDuration={setDuration}
          progressTime={progressTime}
          setProgressTime={setProgressTime}
        />
      ) : null}
    </>
  );
};
