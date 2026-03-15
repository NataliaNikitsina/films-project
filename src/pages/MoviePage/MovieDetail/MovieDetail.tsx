import s from './MovieDetail.module.css';
import noCover from '@/assets/images/noCover.svg';
import type {MovieDetailsResponse} from '@/common/types';
import {IMAGE_SIZES} from '@/common/constants';
import {MovieInfo} from '@/pages/MoviePage/MovieDetail/MovieInfo';
import {MovieGenres} from '@/pages/MoviePage/MovieDetail/MovieGenres';
import {useImageBasePath} from '@/common/hooks/useImageBasePath.ts';

type Props = {
  movie: MovieDetailsResponse;
};

export const MovieDetail = ({movie}: Props) => {
  const imageBasePath = useImageBasePath(IMAGE_SIZES.BIG);
  const imagePath = movie.poster_path && imageBasePath ? imageBasePath + movie.poster_path : noCover;

  return (
    <div className={s.container}>
      <img src={imagePath} alt="movie poster" className={s.cover} />
      <div className={s.details}>
        <MovieInfo movie={movie} />
        <p className={s.description}>{movie.overview}</p>
        <MovieGenres genres={movie.genres} />
      </div>
    </div>
  );
};
