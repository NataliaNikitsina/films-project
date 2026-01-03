import s from './MovieActors.module.css'
import type { Cast } from "@/common/types";
import { IMAGE_SIZES } from "@/common/constants";
import noCover from "@/assets/images/noCover.svg"
import { useImageBasePath } from "@/common/hooks/useImageBasePath.ts";


type Props = {
  cast: Cast[]
}

export const MovieActors = ({cast}: Props) => {
  const imageBasePath = useImageBasePath(IMAGE_SIZES.CARD)
  return (
          <div className={s.container}>
            <h2>Cast</h2>
            <div className={s.actors}>
              {cast.map(el => (
                      <div className={s.actor}>
                        <div className={s.photo}>
                          <img src={el.profile_path ? imageBasePath + el.profile_path : noCover}
                               alt="avatar1"/>
                        </div>
                        <div className={s.info}>
                          <p>{el.name}</p>
                          <p className={s.role}>Role: {el.character}</p>
                        </div>

                      </div>
              ))}
            </div>
          </div>
  )
}