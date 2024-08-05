import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../config/env';
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token =
        (getState() as RootState).authReducer.user?.token ||
        localStorage.getItem("token");
  
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 5 });

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
})