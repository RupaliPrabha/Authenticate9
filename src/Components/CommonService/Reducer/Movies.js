import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieData: [],
  currentTab: "HOME",
  movieArr: [],
};

const movieSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setMovieData: (state, action) => {
      state.movieData = action.payload;
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
    updateMovieArr: (state, action) => {
      state.movieArr = action.payload;
    },
  },
});

export const { setMovieData, setCurrentTab, updateMovieArr } =
  movieSlice.actions;
export default movieSlice.reducer;
