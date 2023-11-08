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
    deleteBook(state , action) {
        state.book = action.payload
    },
    createBook(state , action) {
        state?.book?.push({book : action.payload})
    },
    editBookStatus(state , action) {
        const book = state.book.find((item) => item.book.id == action.payload.book.id)
        book.status = action.payload.status
    }

  },
});

export const { updateBook , createBook , deleteBook , editBookStatus } = bookSlice.actions;

const bookReducer = bookSlice.reducer;

export default bookReducer;
