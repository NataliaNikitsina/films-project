import {baseApi} from "@/app/baseApi.ts"
import type {MoviesResponse, MoviesResponseWithDatePeriod, SearchParams} from "@/common/types/types.ts";

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPopularMovie: builder.query<MoviesResponse, { page: number }>({
            query: (page) => ({
                url: "/movie/popular",
                params: page,
            }),
        }),

        getTopRatedMovie: builder.query<MoviesResponse, { page: number }>({
            query: (page) => ({
                url: "/movie/top_rated",
                params: page,
            }),
        }),

        getUpcomingMovie: builder.query<MoviesResponseWithDatePeriod, { page: number }>({
            query: (page) => ({
                url: "/movie/upcoming",
                params: page,
            }),
        }),

        getNowPlayingMovie: builder.query<MoviesResponseWithDatePeriod, { page: number }>({
            query: (page) => ({
                url: "/movie/now_playing",
                params: page,
            }),
        }),

        searchMovies: builder.query<MoviesResponseWithDatePeriod, SearchParams>({
            query: (params) => ({
                url: "/search/movie",
                params
            }),
        }),
    })
})

export const {
    useGetPopularMovieQuery,
    useGetTopRatedMovieQuery,
    useGetUpcomingMovieQuery,
    useGetNowPlayingMovieQuery,
    useSearchMoviesQuery
} = moviesApi

