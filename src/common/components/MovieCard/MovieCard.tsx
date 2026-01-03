import s from './MovieCard.module.css'
import noCover from '@/assets/images/noCover.svg'
import type {Movie} from "@/common/types";
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import { addFavoriteMovie, deleteFavoriteMovie, selectFavoriteMovies, useGetConfigurationQuery } from "@/app/model";
import {IMAGE_SIZES} from "@/common/constants";
import {NavLink} from "react-router";


type Props = {
    movie: Movie
}

export const MovieCard = ({movie}: Props) => {
    const {data} = useGetConfigurationQuery()

    const favoritesMovies = useAppSelector(selectFavoriteMovies)
    const dispatch = useAppDispatch();

    const baseImageUrl = data?.images.secure_base_url
    const imageSize = data?.images.poster_sizes.includes(IMAGE_SIZES.CARD) ? IMAGE_SIZES.CARD : ''

    let imagePath

    if (movie.poster_path && imageSize) {
        imagePath = baseImageUrl + imageSize + movie.poster_path
    } else imagePath = noCover


    const handleFavorites = () => {
        if (favoritesMovies.includes(movie)) {
            dispatch(deleteFavoriteMovie({movieId: movie.id}))
        }
        if (!favoritesMovies.includes(movie)) {
            dispatch(addFavoriteMovie({movie}))
        }
    }

    const ratingColorStyle = movie.vote_average > 8 ? s.green :
        movie.vote_average > 5 ? s.yellow : s.red

    const heartColorStyle = favoritesMovies.includes(movie) ? s.red : s.white

    return (
        <article className={s.card}>
            <div className={s.poster}>
                <NavLink className={s.posterLink} to={`/movies/${movie.id}`}>
                    <img className={s.image} src={imagePath} alt={'movie poster'}/>
                </NavLink>
                <div className={`${s.rating} ${ratingColorStyle}`}>{movie.vote_average.toFixed(1)}</div>
                <div className={s.favorite} onClick={handleFavorites}>
                    <div className={`${s.heart} ${heartColorStyle}`}/>
                </div>
            </div>
            <NavLink className={s.titleLink} to={`/movies/${movie.id}`}>
                <h4>{movie.title}</h4>
            </NavLink>
        </article>
    )
}