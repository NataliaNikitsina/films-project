import s from "@/pages/MoviePage/MovieActors/MovieActors.module.css";
import noCover from "@/assets/images/noCover.svg";
import type { Cast } from "@/common/types";
import { useImageBasePath } from "@/common/hooks/useImageBasePath.ts";
import { IMAGE_SIZES } from "@/common/constants";

type Props = {
  actor: Cast
}

export const Actor = ({actor}: Props) => {
  const imageBasePath = useImageBasePath(IMAGE_SIZES.CARD)
  return (
          <div className={s.container}>
            <div className={s.photo}>
              <img src={actor.profile_path ? imageBasePath + actor.profile_path : noCover} alt="actor"/>
            </div>
            <div className={s.info}>
              <p>{actor.name}</p>
              <p className={s.role}>Role: {actor.character}</p>
            </div>
          </div>
  )
}