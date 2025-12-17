import {
    useGetNowPlayingMovieQuery,
    useGetPopularMovieQuery,
    useGetTopRatedMovieQuery,
    useGetUpcomingMovieQuery
} from "@/common/api/moviesApi.ts";
import {SECTION_LABELS} from "@/common/constants/constants.ts";
import {getSlicedArray} from "@/common/utils/getSlicedArray.ts";
import {useMemo} from "react";
import {getRandomNumber} from "@/common/utils/getRandomNumber.ts";

export const useGetAllCategoryMoviesQuery = () => {
    const page = useMemo(()=>{
        const number = getRandomNumber(10)
        return number === 0 ? number + 1 : number}, [])

    const {data: popularMovies} = useGetPopularMovieQuery({page})
    const popularMoviesSlice = popularMovies ? getSlicedArray(popularMovies.results) : []

    const {data: topRatedMovies} = useGetTopRatedMovieQuery({page})
    const topRatedMoviesSlice = topRatedMovies ? getSlicedArray(topRatedMovies.results) : []

    const {data: upcomingMovies} = useGetUpcomingMovieQuery({page})
    const upcomingMoviesSlice = upcomingMovies ? getSlicedArray(upcomingMovies.results) : []

    const {data: nowPlayingMovies} = useGetNowPlayingMovieQuery({page})
    const nowPlayingMoviesSlice = nowPlayingMovies ? getSlicedArray(nowPlayingMovies.results) : []

    return {
        [SECTION_LABELS.POPULAR_MOVIES]: popularMoviesSlice,
        [SECTION_LABELS.TOP_RATED_MOVIES]: topRatedMoviesSlice,
        [SECTION_LABELS.UPCOMING_MOVIES]: upcomingMoviesSlice,
        [SECTION_LABELS.NOW_PLAYING_MOVIES]: nowPlayingMoviesSlice,
        popularMoviesAll: popularMovies ? popularMovies.results : []
    }
}