import {POSTER_SIZES} from "@/common/constants/constants.ts";
import type {MovieDetailsResponse} from "@/common/types";
import s from './MovieDetail.module.css'
import {MovieGenres} from "@/pages/MoviePage/MovieDetail/MovieGenres/MovieGenres.tsx";
import {MovieInfo} from "@/pages/MoviePage/MovieDetail/MovieInfo/MovieInfo.tsx";
import {useGetConfigurationQuery} from "@/pages/api/moviesApi.ts";
import noCover from "@/assets/noCover.svg";

type Props = {
    movie: MovieDetailsResponse
}

export const MovieDetail = ({movie}: Props) => {
    const {data} = useGetConfigurationQuery()
    const baseImageUrl = data?.images.secure_base_url
    const imageSize = data?.images.poster_sizes.includes(POSTER_SIZES.BIG) ? POSTER_SIZES.BIG : ''

    let imagePath

    if (movie.poster_path && imageSize) {
        imagePath = baseImageUrl + imageSize + movie.poster_path
    } else imagePath = noCover

    return (
        <div className={s.container}>
            <img src={imagePath} alt="Movie poster" className={s.cover}/>
            <div className={s.details}>
                <MovieInfo movie={movie}/>
                <p className={s.info}>{movie.overview}</p>
                <MovieGenres genres={movie.genres} />
            </div>
        </div>
    )
}