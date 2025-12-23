import {baseApi} from "@/app/baseApi.ts"
import {
    ConfigurationSchema,
    type GenresResponse,
    GenresResponseSchema,
    MovieDetailsResponseSchema,
    MoviesResponseSchema,
    MoviesResponseWithDatePeriodSchema,
    type QueryParams,
    type SearchParams
} from "@/common/types";
import {withZodCatch} from "@/common/utils/withZodCatch.ts";


export const moviesApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getConfiguration: builder.query({
            query: (_ :void) => "/configuration",
            ...withZodCatch(ConfigurationSchema),
        }),

        getPopularMovie: builder.query({
            query: (page: { page: number }) => ({
                url: "/movie/popular",
                params: page,
            }),
            ...withZodCatch(MoviesResponseSchema),
        }),

        getTopRatedMovie: builder.query({
            query: (page: { page: number }) => ({
                url: "/movie/top_rated",
                params: page,
            }),
            ...withZodCatch(MoviesResponseSchema),
        }),

        getUpcomingMovie: builder.query({
            query: (page: { page: number }) => ({
                url: "/movie/upcoming",
                params: page,
            }),
            ...withZodCatch(MoviesResponseWithDatePeriodSchema),
        }),

        getNowPlayingMovie: builder.query({
            query: (page: { page: number }) => ({
                url: "/movie/now_playing",
                params: page,
            }),
            ...withZodCatch(MoviesResponseWithDatePeriodSchema),
        }),

        searchMovies: builder.query({
            query: (params: SearchParams) => ({
                url: "/search/movie",
                params
            }),
            ...withZodCatch(MoviesResponseSchema),
        }),

        getFilteredMovies: builder.query({
            query: (params: QueryParams) => ({
                url: "/discover/movie",
                params
            }),
            ...withZodCatch(MoviesResponseSchema),
        }),

        getGenres: builder.query<GenresResponse, void>({
            query: () => "/genre/movie/list",
            ...withZodCatch(GenresResponseSchema),
        }),

        getMovieDetail: builder.query({
            query: (movieId: number) => ({
                url: `/movie/${movieId}`,
                params:{
                    append_to_response: 'credits,similar',
                },
            }),
            ...withZodCatch(MovieDetailsResponseSchema),
        }),
    })
})

export const {
    useGetConfigurationQuery,
    useGetPopularMovieQuery,
    useGetTopRatedMovieQuery,
    useGetUpcomingMovieQuery,
    useGetNowPlayingMovieQuery,
    useSearchMoviesQuery,
    useGetFilteredMoviesQuery,
    useGetGenresQuery,
    useGetMovieDetailQuery
} = moviesApi

