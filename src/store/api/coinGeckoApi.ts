// coinApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ICoinGecko } from '../../interfaces/ICoinGecko';

export const coinGeckoApi = createApi({
  reducerPath: 'coinGeckoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3/',
    prepareHeaders: headers => {
      headers.set('accept', 'application/json');
      headers.set('x-cg-api-key', 'CG-Vo3t7VFJ2r2ZPXNyF3o3RmWt');
      return headers;
    },
  }),
  endpoints: builder => ({
    getCoinHistory: builder.query<ICoinGecko, { coinId: string; currency: string; days: string }>({
      query: ({ coinId, currency, days }) =>
        `coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`,
    }),
  }),
});

export const { useGetCoinHistoryQuery } = coinGeckoApi;
