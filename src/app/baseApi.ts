import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`,
            accept: 'application/json'
        },
    }),
    endpoints: () => ({})
})


