import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice.js';
import authReducer from './features/auth/authSlice.js';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
  },
});
