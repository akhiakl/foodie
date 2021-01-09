import { createSlice } from '@reduxjs/toolkit';

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
  // DEVICE: "device",
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: THEME.LIGHT,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.theme;

export default themeSlice.reducer;
