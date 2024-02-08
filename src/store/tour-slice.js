import { createSlice } from "@reduxjs/toolkit";

export const tourSlice = createSlice({
  name: "tour",

  initialState: {
    tours: [],
  },

  reducers: {
    addTour(state, action) {
      state.tours.push(action.payload);
    },
    deleteTour(state, action) {
      const selectedTourId = action.payload;

      const filteredTours = state.tours.filter(
        (item) => item.id !== selectedTourId
      );

      state.tours = filteredTours;
    },
  },
});

export const { addTour, deleteTour } = tourSlice.actions;
