import {PROFILE_SIZES} from "@/common/constants/constants.ts";
import noCover from "@/assets/noCover.svg";
import type {Cast} from "@/common/types";
import s from './MovieActors.module.css'
import {useGetConfigurationQuery} from "@/pages/api/moviesApi.ts";

type Props = {
    cast: Cast[]
}

export const MovieActors = ({cast}: Props) => {
    const {data} = useGetConfigurationQuery()
    const baseImageUrl = data?.images.secure_base_url
    const imageSize = data?.images.poster_sizes.includes(PROFILE_SIZES.CARD) ? PROFILE_SIZES.CARD : ''
    return (
        <div className={s.container}>
            <h2>Cast</h2>
            <div className={s.actors}>
                {cast.map(el => (
                    <div className={s.actor}>
                        <div className={s.photo}>
                            <img src={el.profile_path && baseImageUrl && imageSize ? baseImageUrl + imageSize + el.profile_path : noCover}
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