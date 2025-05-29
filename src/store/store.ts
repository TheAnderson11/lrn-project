import { configureStore } from '@reduxjs/toolkit';
import { auth } from './api/loginApi';
import { register } from './api/registerApi';
import themeReducer from './slices/themeSlice';
import userRedicer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    themeSwitcher: themeReducer,
    userSlice: userRedicer,
    [auth.reducerPath]: auth.reducer,
    [register.reducerPath]: register.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(auth.middleware).concat(register.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
