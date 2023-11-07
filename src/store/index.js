import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    book: {},
  },
});

export default store;
