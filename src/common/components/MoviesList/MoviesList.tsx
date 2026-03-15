import s from './MoviesList.module.css';
import {MovieCard} from '@/common/components';
import type {Movie} from '@/common/types';

type Props = {
  movies: Movie[];
};

export const MoviesList = ({movies}: Props) => {
  return (
    <section className={s.container}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};
