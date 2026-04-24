import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: localStorage.getItem("theme") === "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
      localStorage.setItem("theme", state.dark ? "dark" : "light");
    },
    setDark: (state, action) => {
      state.dark = action.payload;
      localStorage.setItem("theme", action.payload ? "dark" : "light");
    },
  },
});

export const { toggleTheme, setDark } = themeSlice.actions;
export default themeSlice.reducer;
