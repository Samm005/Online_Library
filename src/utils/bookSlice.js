import { createSlice } from "@reduxjs/toolkit";
import { booksByCategory } from "./books";

const initialBooks = Object.values(booksByCategory).flat();

const boookSlice = createSlice({
  name: "books",
  initialState: { books: initialBooks },
  reducers: { addbook: (state, action) => state.books.unshift(action.payload) },
});

export const { addbook } = boookSlice.actions;
export default boookSlice.reducer;
