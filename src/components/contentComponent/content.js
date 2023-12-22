import React from "react";
import * as S from "./Content.style";
import { useUserContext } from "../../context";
import { getLikes, getTracks } from "../../api";

export const Content = ({
  tracks,
  setTracks,
  playingTrack,
  setPlayingTrack,
  isPlaying,
  setIsPlaying,
  trackIndex,
  setTrackIndex,
  isLiked,
  setIsLiked,
  playingTrackFromStore
}) => {
  // const handlePlayTrack = (track) => {
  //   setPlayingTrack(track);
  // };
  const { regUser, setRegUser} = useUserContext();
  const nameOfUser = localStorage.getItem('user');
  console.log(nameOfUser);
  const arrOfFavoritesTracks = tracks.filter(track => {
    return track.stared_user.some(user => user.username === nameOfUser)
  });
  console.log(arrOfFavoritesTracks);
  
  console.log(playingTrack?.stared_user.username);
  console.log(tracks);
  console.log(isPlaying);
  const toggleLike = async(id) => {
    setIsLiked(!isLiked);
    getLikes(localStorage.access, id)
    .then(() => {
      getTracks()
      .then((track) => {
        setTracks(track)
      })
    })

    console.log('лайк/дизлайк');
  }

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
              // onClick={() => {
              //   setPlayingTrack(track);
              //   isPlaying = true;
              //   setIsPlaying(!isPlaying);
              //   setTrackIndex(index);
              // }}
            >
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage onClick={() => {
                setPlayingTrack(track);
                isPlaying = true;
                setIsPlaying(!isPlaying);
                setTrackIndex(index);
              }}>
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
                    <S.TrackTitleLink onClick={() => {
                setPlayingTrack(track);
                isPlaying = true;
                setIsPlaying(!isPlaying);
                setTrackIndex(index);
              }}>
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
                  <S.TrackTimeSvg alt="time" onClick={() => {
                    toggleLike(track.id)
                  }}>
                    {((arrOfFavoritesTracks.includes(track))) ? (<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z" fill="#B672FF"/>
<path d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052" stroke="#B672FF"/>
</svg>) : (<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={toggleLike}>
<path d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052" stroke="#ACACAC"/>
</svg>
)

                    }
                    {/* </S.LikeElement> */}
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

export default Content;
