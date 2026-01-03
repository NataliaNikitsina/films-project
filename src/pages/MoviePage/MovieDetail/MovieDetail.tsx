import s from './MovieDetail.module.css'
import noCover from "@/assets/images/noCover.svg";
import type {MovieDetailsResponse} from "@/common/types";
import {IMAGE_SIZES} from "@/common/constants";
import {MovieInfo} from "@/pages/MoviePage/MovieDetail/MovieInfo";
import {MovieGenres} from "@/pages/MoviePage/MovieDetail/MovieGenres";
import { useGetConfigurationQuery } from "@/app/model";


type Props = {
    movie: MovieDetailsResponse
}

export const MovieDetail = ({movie}: Props) => {
    const {data} = useGetConfigurationQuery()
    const baseImageUrl = data?.images.secure_base_url
    const imageSize = data?.images.poster_sizes.includes(IMAGE_SIZES.BIG) ? IMAGE_SIZES.BIG : ''

    let imagePath

    if (movie.poster_path && imageSize) {
        imagePath = baseImageUrl + imageSize + movie.poster_path
    } else imagePath = noCover

    return (
        <div className={s.container}>
            <img src={imagePath} alt="Movie poster" className={s.cover}/>
            <div className={s.details}>
                <MovieInfo movie={movie}/>
                <p className={s.description}>{movie.overview}</p>
                <MovieGenres genres={movie.genres} />
            </div>
        </div>
    )
}