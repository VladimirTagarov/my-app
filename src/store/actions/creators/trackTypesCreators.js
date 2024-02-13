import {
  SET_PLAYING_TRACK,
  SET_IS_PLAYING,
  NEXT_TRACK,
  PREV_TRACK,
  TOGGLE_SHUFFLED,
} from "../types/tracksTypes";

export const setPlayingTrack = (playingTrack, indexPlayingTrack) => ({
  type: SET_PLAYING_TRACK,
  payload: { playingTrack, indexPlayingTrack },
});



export const setIsPlaying = (isPlaying) => ({
  type: SET_IS_PLAYING,
  payload: isPlaying,
});

export const setNextTrack = (nextTrack, indexNextTrack) => ({
  type: NEXT_TRACK,
  payload: { nextTrack, indexNextTrack },
});

export const setPrevTrack = (prevTrack, indexPrevTrack) => ({
  type: PREV_TRACK,
  payload: { prevTrack, indexPrevTrack },
});

export const toggleShuffle = (isShuffled, shuffledTracks) => ({
  type: TOGGLE_SHUFFLED,
  payload: { isShuffled, shuffledTracks },
});
