import {baseApi} from "@/app/baseApi.ts"
import type {FavoriteMoviesResponse} from "@/common/types/types.ts";

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPopularMovie: builder.query<FavoriteMoviesResponse, {page: number}>({
            query: (page) => ({
                url:"/movie/popular",
                params: page,
            }),
        }),
    })
})

export const {useGetPopularMovieQuery} = moviesApi

