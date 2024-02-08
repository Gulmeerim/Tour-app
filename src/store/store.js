import { configureStore } from "@reduxjs/toolkit";
import { tourSlice } from "./tour-slice";

export const store = configureStore({
  reducer: {
    tour: tourSlice.reducer,
  },
});
