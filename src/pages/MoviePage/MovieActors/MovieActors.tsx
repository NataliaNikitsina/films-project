import s from './MovieActors.module.css'
import type { Cast } from "@/common/types";
import { Actor } from "@/pages/MoviePage/MovieActors/Actor";


type Props = {
  cast: Cast[]
}

export const MovieActors = ({cast}: Props) => {
  return (
          <div className={s.container}>
            <h2>Cast</h2>
            <div className={s.actors}>
              {cast.map(actor => (<Actor key={actor.cast_id} actor={actor}/>))}
            </div>
          </div>
  )
}