import {IMAGE_PATH, POSTER_SIZES} from "@/common/constants/constants.ts";
import type {MovieDetailsResponse} from "@/common/types";
import s from './MovieDetail.module.css'
import {MovieGenres} from "@/pages/MoviePage/MovieDetail/MovieGenres/MovieGenres.tsx";
import {MovieCard} from "@/pages/MoviePage/MovieDetail/MovieCard/MovieCard.tsx";

type Props = {
    movie: MovieDetailsResponse
}

export const MovieDetail = ({movie}: Props) => {
    return (
        <div className={s.container}>
            <img src={IMAGE_PATH + POSTER_SIZES.BIG + movie.poster_path} alt="Movie poster" className={s.cover}/>
            <div className={s.details}>
                <MovieCard movie={movie}/>
                <p className={s.info}>{movie.overview}</p>
                <MovieGenres genres={movie.genres} />
            </div>
        </div>
    )
}