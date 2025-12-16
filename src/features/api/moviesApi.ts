import {baseApi} from "@/app/baseApi.ts"
import type {
    GenresResponse,
    MoviesResponse,
    MoviesResponseWithDatePeriod,
    QueryParams,
    SearchParams
} from "@/common/types/types.ts";

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

        getFilteredMovies: builder.query<MoviesResponse, QueryParams>({
            query: (params) => ({
                url: "/discover/movie",
                params
            }),
        }),

        getGenres: builder.query<GenresResponse, void>({
            query: () => "/genre/movie/list",
        }),
    })
})

export const {
    useGetPopularMovieQuery,
    useGetTopRatedMovieQuery,
    useGetUpcomingMovieQuery,
    useGetNowPlayingMovieQuery,
    useSearchMoviesQuery,
    useGetFilteredMoviesQuery,
    useGetGenresQuery
} = moviesApi

