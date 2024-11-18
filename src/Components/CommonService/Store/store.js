import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    data: movieReducer,
  },
});
