import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    createBook(state, action) {
      state.book = action.payload;
    }
  },
});

export const { createBook } = bookSlice.actions;

const bookReducer = bookSlice.reducer;

export default bookReducer;
