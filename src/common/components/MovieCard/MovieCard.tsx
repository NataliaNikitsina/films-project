import {POSTER_SIZES} from "@/common/constants/constants.ts";
import type {Movie} from "@/common/types/types.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {addFavoriteMovieAC, deleteFavoriteMovieAC, selectFavoriteMovies} from "@/app/app-slice.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import s from './MovieCard.module.css'
import noCover from '@/assets/images/noCover.svg'
import {useGetConfigurationQuery} from "@/pages/api/moviesApi.ts";

type Props = {
    movie: Movie
}

export const MovieCard = ({movie}: Props) => {
    const {data} = useGetConfigurationQuery()

    const favoritesMovies = useAppSelector(selectFavoriteMovies)
    const dispatch = useAppDispatch();

    const baseImageUrl = data?.images.secure_base_url
    const imageSize = data?.images.poster_sizes.includes(POSTER_SIZES.CARD) ? POSTER_SIZES.CARD : ''

    let imagePath

    if (movie.poster_path && imageSize) {
        imagePath = baseImageUrl + imageSize + movie.poster_path
    } else imagePath = noCover


    const handleFavorites = () => {
        if (favoritesMovies.includes(movie)) {
            dispatch(deleteFavoriteMovieAC({movieId: movie.id}))
        }
        if (!favoritesMovies.includes(movie)) {
            dispatch(addFavoriteMovieAC({movie}))
        }
    }

    const ratingColorStyle = movie.vote_average > 8 ? s.green :
        movie.vote_average > 5 ? s.yellow : s.red

    const heartColorStyle = favoritesMovies.includes(movie) ? s.red : s.white

    return (
        <article className={s.card}>
            <div className={s.poster}>
                <a className={s.posterLink} href={`/movies/${movie.id}`}>
                    <img className={s.image} src={imagePath} alt={'movie poster'}/>
                </a>
                <div className={`${s.rating} ${ratingColorStyle}`}>{movie.vote_average.toFixed(1)}</div>
                <div className={s.favorite}>
                    <div className={`${s.heart} ${heartColorStyle}`} onClick={handleFavorites}/>
                </div>
            </div>
            <a className={s.titleLink} href={`/movies/${movie.id}`}>
                <h4>{movie.title}</h4>
            </a>
        </article>
    )
}