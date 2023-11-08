import React from "react";
import * as S from "./Content.style";

export const Content = ({
  tracks,
  playingTrack,
  setPlayingTrack,
  isPlaying,
  setIsPlaying,
  trackIndex,
  setTrackIndex
}) => {
  // const handlePlayTrack = (track) => {
  //   setPlayingTrack(track);
  // };
  console.log(playingTrack);
  console.log(isPlaying);

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
        {tracks.map((track, index) => {
          return (
            <S.PlaylistItem
              key={track.id}
              onClick={() => {
                setPlayingTrack(track);
                isPlaying = true;
                setIsPlaying(!isPlaying);
                setTrackIndex(index);
              }}
            >
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    {((track === playingTrack) && isPlaying ) ? <S.PlayingDotActive>
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use> 
                    </S.TrackTitleSvg>
                    </S.PlayingDotActive> : ((track === playingTrack) && !isPlaying ) ? <S.PlayingDotActivePause>
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use> 
                    </S.TrackTitleSvg>
                    </S.PlayingDotActivePause> :
                    <S.PlayingDot>
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use> 
                    </S.TrackTitleSvg>
                    </S.PlayingDot>}
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink>
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
                  <S.TrackTimeSvg alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
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
      {/* <S.ContentPlaylist>
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                Welcome Reality
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>4:44</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Elektro <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                Dynoro, Outwork, Mr. Gee
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Elektro</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>2:22</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  I’m Fire <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">Ali Bakgor</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">I’m Fire</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>2:22</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Non Stop
                  <S.TrackTitleSpan>(Remix)</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                Стоункат, Psychopath
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Non Stop</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>4:12</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Run Run
                  <S.TrackTitleSpan>(feat. AR/CO)</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                Jaded, Will Clarke, AR/CO
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Run Run</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>2:54</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Eyes on Fire
                  <S.TrackTitleSpan>(Zeds Dead Remix)</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                Blue Foundation, Zeds Dead
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Eyes on Fire</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>5:20</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Mucho Bien
                  <S.TrackTitleSpan>(Hi Profile Remix)</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                HYBIT, Mr. Black, Offer Nissim, Hi Profile
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Mucho Bien</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>3:41</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Captivating</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Captivating</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Captivating</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Captivating</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Captivating</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Captivating</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Captivating</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  How Deep Is Your Love
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                Calvin Harris, Disciples
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                How Deep Is Your Love
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>3:32</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Morena <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">Tom Boxer</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                Soundz Made in Romania
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>3:36</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://"></S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://"></S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText></S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      </S.ContentPlaylist> */}
    </S.CenterBlockContent>
  );
};

export default Content;
