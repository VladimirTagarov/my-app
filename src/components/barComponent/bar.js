import React, { useEffect } from "react";
import * as S from "./Bar.style";
import { useRef, useState } from "react";

export const Bar = ({ tracks, playingTrack, setPlayingTrack }) => {
  console.log(playingTrack);
  console.log();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
    setPlayingTrack(playingTrack);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      setPlayingTrack(playingTrack);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
      setPlayingTrack(playingTrack);
    }
  }, [isPlaying, audioRef, playingTrack, setPlayingTrack]);

  const togglePlay = isPlaying ? handleStop : handleStart;

  const [progressTime, setProgressTime] = useState(10);

  const [duration, setDuration] = useState(110);
  useEffect(() => {
    if (isPlaying) {
      setDuration(audioRef.current.duration);
      console.log(duration);
    }
  }, []);

  const handleProgress = () => {
    console.log(audioRef.current.currentTime);
    // audioRef.current.currentTime = progressTime;
    setProgressTime(audioRef.current.currentTime);
    console.log(progressTime);
    console.log(audioRef.current.currentTime);
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

  return (
    <>
      <audio
        controls
        ref={audioRef}
        tracks={tracks}
        playingTrack={playingTrack}
        setPlayingTrack={setPlayingTrack}
      >
        <source
          tracks={tracks}
          playingTrack={playingTrack}
          setPlayingTrack={setPlayingTrack}
          src={playingTrack.track_file}
        ></source>
      </audio>
      <S.BarContent>
        <S.ProgressBar
          type="range"
          min={0}
          max={duration}
          step={1}
          defaultValue="0"
          value={progressTime}
          onChange={(event) => setProgressTime(event.target.value)}
          // onChange={handleProgress}
          $color="#B672FF"
          audioRef={audioRef}
        ></S.ProgressBar>
        <S.BarPlayerProgress></S.BarPlayerProgress>

        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.BarPlayerBtnPrev
                onClick={() => {
                  alert("Еще не реализовано");
                }}
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
                onClick={() => {
                  alert("Еще не реализовано");
                }}
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
                onClick={() => {
                  alert("Еще не реализовано");
                }}
              >
                <S.BarPlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.BarPlayerBtnShuffleSvg>
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
                <S.TrackPlayLike className="_btn-icon">
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
    </>
  );
};

export default Bar;
