import { createSlice } from "@reduxjs/toolkit";


const trackSlice = createSlice({
  name: "tracks",
  initialState: {
    tracks: [],
    currentPlaylist: []
  },
  reducers: {
    setPlayingTrack(state, action) {
      state.tracks[0] = {
        track: action.payload,
      }
    },
    setCurrentPlaylist(state, action) {
      state.currentPlaylist = action.payload
    }

  },
})

export const { setPlayingTrack, setCurrentPlaylist } = trackSlice.actions

export default trackSlice.reducer;
