import s from './MovieGenres.module.css'
import type { Genre } from "@/common/types";

type Props = {
  genres: Genre[]
}

export const MovieGenres = ({genres}: Props) => {
  return (
          <div className={s.container}>
            <h4>Genres</h4>
            <ul className={s.list}>
              {genres.map((el, index) => (<li key={index} className={s.item}>{el.name}</li>))}
            </ul>
          </div>
  )
}