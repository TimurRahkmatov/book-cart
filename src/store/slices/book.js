import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    updateBook(state, action) {
      state.book = action.payload;
    },
    createBook(state , action) {
        state.book.push(action.payload)
    }

  },
});

export const { updateBook , createBook } = bookSlice.actions;

const bookReducer = bookSlice.reducer;

export default bookReducer;
