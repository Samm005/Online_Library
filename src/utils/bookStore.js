import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

const bookStore = configureStore({
  reducer: {
    bookS: bookReducer,
  },
});

export default bookStore;
