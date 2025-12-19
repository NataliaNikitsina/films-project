import type {MovieDetailsResponse} from "@/common/types";
import s from "./MovieCard.module.css"


type Props = {
    movie: MovieDetailsResponse
}
export const MovieCard = ({movie}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.title}>
                <h1>{movie.title}</h1>
                <button className={s.btn} onClick={() => history.back()}>Back</button>
            </div>
            {movie.title !== movie.original_title &&
                <span className={s.originalTitle}>Original: {movie.original_title}</span>}
            <div className={s.wrapper}>
                <span className={s.rating}>{movie.vote_average}</span>
                <span className={s.info}>Time: {movie.runtime} min</span>
                <span className={s.info}>Release date: {movie.release_date}</span>
            </div>
        </div>
    )
}