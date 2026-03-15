import {NotFoundPage} from '@/pages/NotFoundPage/NotFoundPage.tsx';
import {Navigate, Route, Routes} from 'react-router';
import {PATH} from '@/common/constants/constants.ts';
import {MainPage} from '@/pages/MainPage';
import {MoviePage} from '@/pages/MoviePage';
import {FilteredMoviesPage} from '@/pages/FilteredMoviesPage';
import {FavoritesPage} from '@/pages/FavoritesPage';
import {SearchPage} from '@/pages/SearchPage';
import {CategoryMoviesPage} from '@/pages/CategoryMoviesPage';
import {PopularMovies} from '@/pages/CategoryMoviesPage/PopularMovies';
import {TopRatedMovies} from '@/pages/CategoryMoviesPage/TopRatedMovies';
import {UpcomingMovies} from '@/pages/CategoryMoviesPage/UpcomingMovies';
import {NowPlayingMovies} from '@/pages/CategoryMoviesPage/NowPlayingMovies';

export const Routing = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN_PAGE} element={<MainPage />} />
      <Route path={PATH.MOVIE_PAGE} element={<MoviePage />} />
      <Route path={PATH.CATEGORY_MOVIES_PAGE} element={<CategoryMoviesPage />}>
        <Route index element={<Navigate to={PATH.POPULAR_MOVIES} replace />} />
        <Route path={PATH.POPULAR_MOVIES} element={<PopularMovies />} />
        <Route path={PATH.TOP_RATED_MOVIES} element={<TopRatedMovies />} />
        <Route path={PATH.UPCOMING_MOVIES} element={<UpcomingMovies />} />
        <Route path={PATH.NOW_PLAYING_MOVIES} element={<NowPlayingMovies />} />
      </Route>
      <Route path={PATH.FILTERED_MOVIES_PAGE} element={<FilteredMoviesPage />} />
      <Route path={PATH.FAVORITES_MOVIES_PAGE} element={<FavoritesPage />} />
      <Route path={PATH.SEARCH_PAGE} element={<SearchPage />} />
      <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
