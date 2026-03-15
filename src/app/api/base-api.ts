import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {handleErrors} from '@/common/utils/handleError.ts';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: async (args, api, extraOptions) => {
    const res = await fetchBaseQuery({
      baseUrl: 'https://api.themoviedb.org/3',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
        accept: 'application/json',
      },
    })(args, api, extraOptions);
    if (res.error) {
      handleErrors(res.error);
    }
    return res;
  },
  endpoints: () => ({}),
});
