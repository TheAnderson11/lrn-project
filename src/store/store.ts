import { configureStore } from '@reduxjs/toolkit';
import { apiCoin } from './api/coingecko';
import { auth } from './api/loginApi';
import { register } from './api/registerApi';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    themeSwitcher: themeReducer,
    userSlice: userReducer,
    [auth.reducerPath]: auth.reducer,
    [register.reducerPath]: register.reducer,
    [apiCoin.reducerPath]: apiCoin.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(auth.middleware)
      .concat(register.middleware)
      .concat(apiCoin.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
