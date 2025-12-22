import type {MovieDetailsResponse} from "@/common/types";
import s from "./MovieInfo.module.css"


type Props = {
    movie: MovieDetailsResponse
}
export const MovieInfo = ({movie}: Props) => {
    const ratingColorStyle = movie.vote_average > 8 ? s.green :
        movie.vote_average > 5 ? s.yellow : s.red

    return (
        <div className={s.container}>
            <div className={s.title}>
                <h1>{movie.title}</h1>
                <button className={s.btn} onClick={() => history.back()}>Back</button>
            </div>
            {movie.title !== movie.original_title &&
                <span className={s.originalTitle}>Original: {movie.original_title}</span>}
            <div className={s.wrapper}>
                <span className={`${s.rating} ${ratingColorStyle}`}>{movie.vote_average.toFixed(1)}</span>
                <span className={s.info}>Time: {movie.runtime} min</span>
                <span className={s.info}>Release date: {movie.release_date}</span>
            </div>
        </div>
    )
}