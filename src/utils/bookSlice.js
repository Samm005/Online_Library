import { createSlice } from "@reduxjs/toolkit";
import { booksByCategory } from "./books";

const initialBooks = Object.values(booksByCategory).flat();

const bookSlice = createSlice({
  name: "books",
  initialState: { books: initialBooks },
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
