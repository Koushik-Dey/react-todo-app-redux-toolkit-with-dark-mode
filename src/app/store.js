import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";
import todoReducer from "../features/todoSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todo: todoReducer,
  },
});
