import type {MovieDetailsResponse} from '@/common/types';
import s from './MovieInfo.module.css';

type Props = {
  movie: MovieDetailsResponse;
};

export const MovieInfo = ({movie}: Props) => {
  const ratingColor = movie.vote_average > 8 ? s.green : movie.vote_average > 5 ? s.yellow : s.red;
  const ratingStyle = `${s.rating} ${ratingColor}`;

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>{movie.title}</h1>
        <button className={s.btn} onClick={() => history.back()}>
          Back
        </button>
      </div>
      {movie.title !== movie.original_title && <h3 className={s.originalTitle}>Original: {movie.original_title}</h3>}
      <div className={s.wrapper}>
        <span className={ratingStyle}>{movie.vote_average.toFixed(1)}</span>
        <span>Time: {movie.runtime} min</span>
        <span>Release date: {movie.release_date}</span>
      </div>
    </div>
  );
};
