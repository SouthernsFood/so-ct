import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice.js';
import authReducer from './features/auth/authSlice.js';
import mailReducer from './features/mail/mailSlice.js';
import eventReducer from './features/events/eventSlice.js';
import menuReducer from './features/menu/menuSlice.js';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    mail: mailReducer,
    events: eventReducer,
    menu: menuReducer,
  },
});
