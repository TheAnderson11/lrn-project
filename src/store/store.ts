import { configureStore } from '@reduxjs/toolkit';

import { coinGeckoApi } from './api/coinGeckoApi';
import { auth } from './api/loginApi';
import { register } from './api/registerApi';
import coinGeckoReducer from './slices/coinGeckoSlice';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    themeSwitcher: themeReducer,
    userSlice: userReducer,
    coinGeckoSlice: coinGeckoReducer,
    [auth.reducerPath]: auth.reducer,
    [register.reducerPath]: register.reducer,
    [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(auth.middleware)
      .concat(register.middleware)
      .concat(coinGeckoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
