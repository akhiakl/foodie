import { Appearance } from 'react-native';
import { createSlice } from '@reduxjs/toolkit';

const colorScheme = Appearance.getColorScheme();

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    name: THEME.SYSTEM,
    scheme: colorScheme,
    currSystemScheme: colorScheme,
  },
  reducers: {
    setTheme: (state, { payload }) => {
      state.name = payload;
      state.scheme = payload === THEME.SYSTEM ? state.currSystemScheme : payload;
    },
    changeSystemScheme: (state, { payload }) => {
      console.log(state, payload);
      state.currSystemScheme = payload;
      if (state.name === THEME.SYSTEM) {
        state.scheme = payload;
      }
    },
  },
});

export const { setTheme, changeSystemScheme } = themeSlice.actions;

export const getThemeName = (state) => (state.theme.name);
export const getColorScheme = (state) => (state.theme.scheme);

export default themeSlice.reducer;
