import s from './MovieGenres.module.css'
import type {Genre} from "@/common/types";

type Props = {
    genres: Genre[]
}

export const MovieGenres = ({genres}:Props) => {
    return (
        <div className={s.genres}>
            <h4>Genres</h4>
            <ul className={s.genreList}>
                {genres.map((el, index) => (
                    <li key={index} className={s.genreItem}>{el.name}</li>
                ))}
            </ul>
        </div>
    )
}