import {
    useGetNowPlayingMovieQuery,
    useGetPopularMovieQuery,
    useGetTopRatedMovieQuery,
    useGetUpcomingMovieQuery
} from "@/features/api/moviesApi.ts";
import {SECTION_LABELS} from "@/common/constants/constants.ts";
import {getSlicedArray} from "@/common/utils/getSlicedArray.ts";

export const useGetAllCategoryMoviesQuery = () => {
    const {data: popularMovies} = useGetPopularMovieQuery({page: 1})
    const popularMoviesSlice = popularMovies ? getSlicedArray(popularMovies.results) : []

    const {data: topRatedMovies} = useGetTopRatedMovieQuery({page: 1})
    const topRatedMoviesSlice = topRatedMovies ? getSlicedArray(topRatedMovies.results) : []

    const {data: upcomingMovies} = useGetUpcomingMovieQuery({page: 1})
    const upcomingMoviesSlice = upcomingMovies ? getSlicedArray(upcomingMovies.results) : []

    const {data: nowPlayingMovies} = useGetNowPlayingMovieQuery({page: 1})
    const nowPlayingMoviesSlice = nowPlayingMovies ? getSlicedArray(nowPlayingMovies.results) : []

    return {
        [SECTION_LABELS.POPULAR_MOVIES]: popularMoviesSlice,
        [SECTION_LABELS.TOP_RATED_MOVIES]: topRatedMoviesSlice,
        [SECTION_LABELS.UPCOMING_MOVIES]: upcomingMoviesSlice,
        [SECTION_LABELS.NOW_PLAYING_MOVIES]: nowPlayingMoviesSlice,
    }
}