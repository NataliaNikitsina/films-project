import type {Movie} from '@/common/types';
import {MoviesList} from '@/common/components/MoviesList/MoviesList.tsx';
import s from './SimilarMovies.module.css';

type Props = {
  movies: Movie[];
};

export const SimilarMovies = ({movies}: Props) => {
  return (
    <div className={s.container}>
      <h2>Similar Movies</h2>
      <MoviesList movies={movies} />
    </div>
  );
};
