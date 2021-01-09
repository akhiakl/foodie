import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../screens/Home/homeSlice';
import themeReducer from './themeSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    home: homeReducer,
  },
});
