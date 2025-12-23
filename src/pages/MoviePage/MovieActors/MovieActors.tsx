import s from './MovieActors.module.css'
import type {Cast} from "@/common/types";
import {useGetConfigurationQuery} from "@/pages/api";
import {PROFILE_SIZES} from "@/common/constants";
import noCover from "@/assets/images/noCover.svg"


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
                            <p>{el.name}</p>
                            <p className={s.role}>Role: {el.character}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}