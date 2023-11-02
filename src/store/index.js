import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./reducers/tracksReducer";

export default configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});
