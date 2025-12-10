import {
    useGetNowPlayingMovieQuery,
    useGetPopularMovieQuery,
    useGetTopRatedMovieQuery,
    useGetUpcomingMovieQuery
} from "@/features/moviesApi.ts";
import {SECTION_LABELS} from "@/common/constants/constants.ts";

export const useGetAllCategoryMoviesQuery = () => {
    const {data: popularMovies} = useGetPopularMovieQuery({page: 1})
    const popularMoviesSlice = popularMovies?.results.slice(0, 6)

    const {data: topRatedMovies} = useGetTopRatedMovieQuery({page: 1})
    const topRatedMoviesSlice = topRatedMovies?.results.slice(0, 6)

    const {data: upcomingMovies} = useGetUpcomingMovieQuery({page: 1})
    const upcomingMoviesSlice = upcomingMovies?.results.slice(0, 6)

    const {data: nowPlayingMovies} = useGetNowPlayingMovieQuery({page: 1})
    const nowPlayingMoviesSlice = nowPlayingMovies?.results.slice(0, 6)

    return {
        [SECTION_LABELS.POPULAR_MOVIES]: popularMoviesSlice,
        [SECTION_LABELS.TOP_RATED_MOVIES]: topRatedMoviesSlice,
        [SECTION_LABELS.UPCOMING_MOVIES]: upcomingMoviesSlice,
        [SECTION_LABELS.NOW_PLAYING_MOVIES]: nowPlayingMoviesSlice,
    }
}