import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

const bookStore = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default bookStore;
