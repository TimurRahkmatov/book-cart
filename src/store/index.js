import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/book";

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;
