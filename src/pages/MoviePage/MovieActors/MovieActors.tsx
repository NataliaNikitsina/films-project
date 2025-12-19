import {IMAGE_PATH, PROFILE_SIZES} from "@/common/constants/constants.ts";
import noCover from "@/assets/noCover.svg";
import type {Cast} from "@/common/types";
import s from './MovieActors.module.css'

type Props = {
    cast: Cast[]
}

export const MovieActors = ({cast}: Props) => {
    return (
        <div className={s.container}>
            <h2>Cast</h2>
            <div className={s.actors}>
                {cast.map(el => (
                    <div className={s.actor}>
                        <div className={s.photo}>
                            <img src={el.profile_path ? IMAGE_PATH + PROFILE_SIZES.CARD + el.profile_path : noCover}
                                 alt="avatar1"/>
                        </div>
                        <div className={s.info}>
                            <p className={s.name}>{el.name}</p>
                            <p className={s.role}>In the role {el.character}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}