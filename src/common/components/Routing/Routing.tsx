import {Navigate, Route, Routes} from "react-router";
import {PATH} from "@/common/constants/constants.ts";
import {Main} from "@/features/pages/MainPage/Main.tsx";
import {FilteredMoviesPage} from "@/features/pages/FilteredMoviesPage/FilteredMoviesPage.tsx";
import {SearchPage} from "@/features/pages/SearchPage/SearchPage.tsx";
import {FavoritesPage} from "@/features/pages/FavoritesPage/FavoritesPage.tsx";
import {CategoryMoviesPage} from "@/features/pages/CategoryMoviesPage/CategoryMoviesPage.tsx";
import {PopularMovies} from "@/features/pages/CategoryMoviesPage/PopularMovies/PopularMovies.tsx";
import {TopRatedMovies} from "@/features/pages/CategoryMoviesPage/TopRatedMovies/TopRatedMovies.tsx";
import {UpcomingMovies} from "@/features/pages/CategoryMoviesPage/UpcomingMovies/UpcomingMovies.tsx";
import {NowPlayingMovies} from "@/features/pages/CategoryMoviesPage/NowPlayingMovies/NowPlayingMovies.tsx";
import {MoviePage} from "@/features/pages/MoviePage/MoviePage.tsx";



export const Routing = () => {
    return (
        <Routes>
            <Route path={PATH.MAIN_PAGE} element={<Main/>}/>
            <Route path={'/movies/:movieId'} element={<MoviePage/>}/>
            <Route path={PATH.CATEGORY_MOVIES_PAGE} element={<CategoryMoviesPage/>}>
                <Route index element={<Navigate to={PATH.POPULAR_MOVIES} replace />} />
                <Route path={PATH.POPULAR_MOVIES} element={<PopularMovies/>}/>
                <Route path={PATH.TOP_RATED_MOVIES} element={<TopRatedMovies/>}/>
                <Route path={PATH.UPCOMING_MOVIES} element={<UpcomingMovies/>}/>
                <Route path={PATH.NOW_PLAYING_MOVIES} element={<NowPlayingMovies/>}/>
            </Route>
            <Route path={PATH.FILTERED_MOVIES_PAGE} element={<FilteredMoviesPage/>}/>
            <Route path={PATH.FAVORITES_MOVIES_PAGE} element={<FavoritesPage/>}/>
            <Route path={PATH.SEARCH_PAGE} element={<SearchPage/>}/>
            {/*<Route path={'*'} element={<div>Page not found</div>}/>*/}
        </Routes>
    )
}
