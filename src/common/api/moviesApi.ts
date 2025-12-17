import {baseApi} from "@/app/baseApi.ts"
import {
    type GenresResponse,
    GenresResponseSchema,
    MovieDetailsResponseSchema,
    MoviesResponseSchema,
    MoviesResponseWithDatePeriodSchema,
    type QueryParams,
    type SearchParams
} from "@/common/types";


export const moviesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPopularMovie: builder.query({
            query: (page: { page: number }) => ({
                url: "/movie/popular",
                params: page,
            }),
            responseSchema: MoviesResponseSchema,
        }),

        getTopRatedMovie: builder.query({
            query: (page: { page: number }) => ({
                url: "/movie/top_rated",
                params: page,
            }),
            responseSchema: MoviesResponseSchema,
        }),

        getUpcomingMovie: builder.query({
            query: (page: { page: number }) => ({
                url: "/movie/upcoming",
                params: page,
            }),
            responseSchema: MoviesResponseWithDatePeriodSchema
        }),

        getNowPlayingMovie: builder.query({
            query: (page: { page: number }) => ({
                url: "/movie/now_playing",
                params: page,
            }),
            responseSchema: MoviesResponseWithDatePeriodSchema
        }),

        searchMovies: builder.query({
            query: (params: SearchParams) => ({
                url: "/search/movie",
                params
            }),
            responseSchema: MoviesResponseWithDatePeriodSchema
        }),

        getFilteredMovies: builder.query({
            query: (params: QueryParams) => ({
                url: "/discover/movie",
                params
            }),
            responseSchema: MoviesResponseSchema
        }),

        getGenres: builder.query<GenresResponse, void>({
            query: () => "/genre/movie/list",
            responseSchema: GenresResponseSchema
        }),

        getMovieDetail: builder.query({
            query: (movieId: number) => ({
                url: `/movie/${movieId}`,
                params:{
                    append_to_response: 'credits,similar',
                },
            }),
            responseSchema: MovieDetailsResponseSchema,
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
    useGetGenresQuery,
    useGetMovieDetailQuery
} = moviesApi

