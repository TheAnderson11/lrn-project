import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';

export const register = createApi({
  reducerPath: 'register',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userSlice.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    regData: builder.mutation({
      query: body => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegDataMutation } = register;
