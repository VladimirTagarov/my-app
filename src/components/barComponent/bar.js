import "./bar.css";
import * as S from "./Bar.style.js";

function Bar() {
  return (
    <S.BarContent>
      <S.BarPlayerProgress></S.BarPlayerProgress>
      <S.BarPlayerBlock>
        <S.BarPlayer>
          <S.PlayerControls>
            <S.BarPlayerBtnPrev>
              <S.BarPlayerBtnPrevSvg alt="prev">
                <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
              </S.BarPlayerBtnPrevSvg>
            </S.BarPlayerBtnPrev>
            <S.BarPlayerBtnPlay className="_btn">
              <S.BarPlayerBtnPlaySvg alt="play">
                <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
              </S.BarPlayerBtnPlaySvg>
            </S.BarPlayerBtnPlay>
            <S.BarPlayerBtnNext>
              <S.BarPlayerBtnNextSvg alt="next">
                <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
              </S.BarPlayerBtnNextSvg>
            </S.BarPlayerBtnNext>
            <S.BarPlayerBtnRepeat className="_btn-icon">
              <S.BarPlayerBtnRepeatSvg
                className="player__btn-repeat-svg"
                alt="repeat"
              >
                <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
              </S.BarPlayerBtnRepeatSvg>
            </S.BarPlayerBtnRepeat>
            <S.BarPlayerBtnShuffle className="_btn-icon">
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
                <S.TrackPlayAuthorLink href="http://">
                  Ты та...
                </S.TrackPlayAuthorLink>
              </S.TrackPlayAuthor>
              <S.TrackPlayAlbum>
                <S.trackPlayAlbumLink href="http://">
                  Баста
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
              />
            </S.VolumeProgress>
          </S.VolumeContent>
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  );
}

export default Bar;
