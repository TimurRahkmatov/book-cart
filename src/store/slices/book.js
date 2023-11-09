import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: [],
  search: null
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
    },
    searchGet(state , action) {
      state.search = action.payload
    }
  },
});

export const { updateBook , createBook , deleteBook , editBookStatus , searchGet } = bookSlice.actions;

const bookReducer = bookSlice.reducer;

export default bookReducer;
