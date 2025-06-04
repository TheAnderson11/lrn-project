import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICoinGecko } from '../../interfaces/ICoinGecko';

const initialState: ICoinGecko = {
  prices: [],
  market_caps: [],
  total_volumes: [],
};

const coinGeckoSlice = createSlice({
  name: 'coinState',
  initialState,
  reducers: {
    setCoinGecko: (state, action: PayloadAction<ICoinGecko>) => {
      state.prices = action.payload.prices;
      state.market_caps = action.payload.market_caps;
      state.total_volumes = action.payload.total_volumes;
    },
  },
});

export const { setCoinGecko } = coinGeckoSlice.actions;
export default coinGeckoSlice.reducer;
