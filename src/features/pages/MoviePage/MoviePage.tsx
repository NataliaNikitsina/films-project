import s from './MoviePage.module.css'
import {IMAGE_PATH, POSTER_SIZES, PROFILE_SIZES} from "@/common/constants/constants.ts";
import {useGetMovieDetailQuery} from "@/features/api/movieDetailApi.ts";
import {useParams} from "react-router";


export const MoviePage = () => {
    const {movieId} = useParams()
    const {data} = useGetMovieDetailQuery(+movieId!)

    if(!data) return null
    return (
            <div className={s.container}>
                <div className={s.wrapper}>
                    <img src={IMAGE_PATH + POSTER_SIZES.BIG + data.poster_path} alt="Movie poster" className={s.cover}/>
                    <div className={s.details}>
                        <div className={s.title1}>{data.title}</div>
                        {data.title !== data.original_title && <div className={s.title2}>Original: {data.original_title}</div>}
                        <span className={s.likes}>Rating {data.vote_average}</span>
                        <span className={s.likes}>Time {data.runtime} min</span>
                        <span className={s.likes}>Release date {data.release_date}</span>
                        <p>{data.overview}</p>

                        <div className={s.column1}>
                            {data.genres.map((el, index) => (
                                <span key={index} className={s.tag}>{el.name}</span>
                            ))}
                        </div>

                    </div>

                </div>

                <div className={s.description}>

                    <div className={s.column2}>

                        <div className={s.actors}>
                            {data.credits.cast.slice(0,6).map(el =>(
                                <div>
                                    <img src={IMAGE_PATH + PROFILE_SIZES.CARD + el.profile_path} alt="avatar1"/>
                                    debugger
                                    <p>Name {el.name}</p>
                                    <p>In the role {el.character}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    )
}