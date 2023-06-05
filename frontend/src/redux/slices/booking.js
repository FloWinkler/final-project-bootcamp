import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookingData: {
      location: null,
      event: null,
      games: null,
      dateTime: null
    },
  },
  reducers: {
    updateLocationData: (state, action) => {
      state.bookingData.location = action.payload;
    },
    updateEventData: (state, action) => {
      state.bookingData.event = action.payload;
    },
    updateGamesData: (state, action) => {
      state.bookingData.games = action.payload;
    },
    updateDateTimeData: (state, action) => {
      state.bookingData.dateTime = action.payload;
    },
  },

});

export const { updateLocationData, updateEventData, updateGamesData, updateDateTimeData } = bookingSlice.actions;

export default bookingSlice.reducer;

