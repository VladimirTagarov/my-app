import React, { useEffect } from "react";
import * as S from "./Bar.style";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPlaylist } from "../../store/reducers/tracksReducer";

export const Bar = ({ tracks, playingTrack, setPlayingTrack, trackIndex, setTrackIndex, isPlaying, setIsPlaying, favoritesTracks, setFavoritesTracks, setIsLiked, isLiked, playlist}) => {
  const dispatch = useDispatch()
  // const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const [isShuffled, setIsShuffled] = useState(false);
  // const [isLiked, setIsLiked] = useState(false)

  const addPlayingTrack = () => dispatch(setPlayingTrack(playingTrack));
  const addCurrentPlaylist = () => dispatch(setCurrentPlaylist(tracks));
  // const addCurrentPlaylist = () => {
  //   (window.location.pathname === '/') ?
  //   dispatch(setCurrentPlaylist(tracks))
  //   :dispatch(setCurrentPlaylist(favoritesTracks));
  // }
    useEffect(() => {
    addCurrentPlaylist()
  }, [playingTrack]);

// console.log("текущий плэйлист:" + playlist);
  // let playlist = tracks;
  // playlist = useSelector((state) => state.tracks.currentPlaylist);


  const shuffleTracks = (array) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
  };

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
    setPlayingTrack(playingTrack);
    addPlayingTrack(playingTrack);
    addCurrentPlaylist(playlist);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isPlaying, audioRef, playingTrack, setPlayingTrack]);

  const togglePlay = isPlaying ? handleStop : handleStart;

  const [progressTime, setProgressTime] = useState(0);

  const [duration, setDuration] = useState(110);
  // if (isPlaying) {
  //   const timing = audioRef.current.duration;
  //   audioRef.current.duration = duration;
  //   setDuration(timing);
  //   console.log(timing);
  //   console.log(audioRef.current.duration);
  // }

  const handleTimeUpdate = () => {
    setProgressTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  function formatTiming(timeOfTracks) {
    const minutes = Math.floor(timeOfTracks / 60);
    const seconds = Math.floor(timeOfTracks % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    // return () => {
    //   audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    // };
  }, []);

  const handleProgress = (value) => {
    // console.log(audioRef.current.currentTime);
    setProgressTime(value);
    audioRef.current.currentTime = value;
    // audioRef.current.currentTime = progressTime;
    // console.log(progressTime);
    // console.log(audioRef.current.currentTime);
    // console.log(duration);
  };

  const [isRepeating, setIsRepeating] = useState(false);
  const toggleRepeat = () => {
    audioRef.current.loop = !audioRef.current.loop;
    setIsRepeating(!isRepeating);
  };

  

  const [volume, setVolume] = useState(0.5);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.volume = volume;
    }
  });

  const handlePreviousTrack = () => {
    if (playlist.indexOf(playingTrack)===0) {
      return
    }
    else if (isShuffled) {
      playlist = shuffleTracks(playlist)
      const indexPrevTrack = playlist.indexOf(playingTrack)-1;
      setPlayingTrack(playlist[indexPrevTrack])

    }
    else {
      const indexPrevTrack = playlist.indexOf(playingTrack)-1;
      setPlayingTrack(playlist[indexPrevTrack])
    }


  }

  const handleNextTrack = () => {
    const indexNextTrack = playlist.indexOf(playingTrack)+1;
    if (playlist.indexOf(playingTrack)===(playlist.length-1)) {
      return
    }
    
    else if (isShuffled) {
      playlist = shuffleTracks(playlist)
      const indexNextTrack = playlist.indexOf(playingTrack)+1;
      setPlayingTrack(playlist[indexNextTrack])

    }
    else {
      const indexNextTrack = playlist.indexOf(playingTrack)+1;
      setPlayingTrack(playlist[indexNextTrack])
    }


  }

  const functionForNextTrack = () => {
    if (!isRepeating) {
      handleNextTrack()
    }
  }

  const handleShuffle = () => {
    playlist = shuffleTracks (playlist);
    setIsShuffled(!isShuffled);
  }

  const handleLike = (trackIndex) => {
    setIsLiked(true);
    // if (favoritesTracks.indexOf(track) === -1) {
      setFavoritesTracks((favoritesTracks) => ([...favoritesTracks, trackIndex]));
      console.log(favoritesTracks);
    // }
    // else {
    //   console.log('Трек уже добавлен в избранное');
    // }

  }

  return (
    <S.Bars>
      <audio
        ref={audioRef}
        tracks={playlist}
        playingTrack={playingTrack}
        setPlayingTrack={setPlayingTrack}
        src={playingTrack.track_file}
        onEnded={functionForNextTrack}
      ></audio>
      <S.BarContent>
        <S.BarTime>
          {formatTiming(progressTime)}/{formatTiming(duration)}
        </S.BarTime>
        <S.ProgressBar
          type="range"
          min={0}
          max={duration}
          step={1}
          defaultValue="0"
          value={progressTime}
          onChange={(event) => handleProgress(event.target.value)}
          // onChange={handleProgress}
          $color="#B672FF"
          audioRef={audioRef}
        ></S.ProgressBar>

        <S.BarPlayerProgress></S.BarPlayerProgress>

        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.BarPlayerBtnPrev
                onClick={handlePreviousTrack}
              >
                <S.BarPlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.BarPlayerBtnPrevSvg>
              </S.BarPlayerBtnPrev>
              <S.BarPlayerBtnPlay className="_btn" onClick={togglePlay}>
                {!isPlaying ? (
                  <S.BarPlayerBtnPlaySvg alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  </S.BarPlayerBtnPlaySvg>
                ) : (
                  <S.BarPlayerBtnPlaySvg alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                  </S.BarPlayerBtnPlaySvg>
                )}
              </S.BarPlayerBtnPlay>
              <S.BarPlayerBtnNext
                onClick={handleNextTrack}
              >
                <S.BarPlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.BarPlayerBtnNextSvg>
              </S.BarPlayerBtnNext>
              <S.BarPlayerBtnRepeat
                className="_btn-icon"
                onClick={toggleRepeat}
              >
                {" "}
                {!isRepeating ? (
                  <S.BarPlayerBtnRepeatSvg
                    className="player__btn-repeat-svg"
                    alt="repeat"
                  >
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </S.BarPlayerBtnRepeatSvg>
                ) : (
                  <S.BarPlayerBtnRepeatSvg
                    className="player__btn-repeat-svg"
                    alt="repeat"
                  >
                    <use xlinkHref="img/icon/sprite.svg#icon-repeating"></use>
                  </S.BarPlayerBtnRepeatSvg>
                )}
              </S.BarPlayerBtnRepeat>
              <S.BarPlayerBtnShuffle
                className="_btn-icon"
                onClick={handleShuffle}
              >
                {!isShuffled ? (
                <S.BarPlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.BarPlayerBtnShuffleSvg>
                ) : (
                  <S.BarPlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffling"></use>
                </S.BarPlayerBtnShuffleSvg>
                )}
              </S.BarPlayerBtnShuffle>
            </S.PlayerControls>
            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink
                    tracks={tracks}
                    playingTrack={playingTrack}
                  >
                    {playingTrack.name}
                  </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  <S.trackPlayAlbumLink
                    tracks={tracks}
                    playingTrack={playingTrack}
                  >
                    {playingTrack.author}
                  </S.trackPlayAlbumLink>
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>
              <S.trackPlayLikeDis>
                <S.TrackPlayLike className="_btn-icon" onClick={handleLike}>
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike className="_btn-icon">
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.trackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress className="_btn">
                <S.VolumeProgressLine
                  className="_btn"
                  type="range"
                  name="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
      </S.Bars>
  );
};

export default Bar;