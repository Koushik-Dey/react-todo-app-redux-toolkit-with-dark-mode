import { createSlice } from "@reduxjs/toolkit";

let getTheme =
  localStorage.getItem("theme") !== null
    ? JSON.parse(localStorage.getItem("theme"))
    : null;

const initialState = {
  theme: getTheme,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    lightTheme: (state, action) => {
      state.theme = "light";

      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
    darkTheme: (state, action) => {
      state.theme = "dark";

      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
  },
});

export const { lightTheme, darkTheme } = themeSlice.actions;

export default themeSlice.reducer;
