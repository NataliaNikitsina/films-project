import {useGetPopularMovieQuery} from "@/features/moviesApi.ts";
import {MovieCard} from "@/common/components/MovieCard/MovieCard.tsx";
import s from './PopularMovies.module.css'

export const PopularMovies = () => {
    const {data} = useGetPopularMovieQuery({page: 1})
    const popularMovies = data?.results.slice(0,6)

    return (
        <div>
            <h3>Popular Movies</h3>
            <div className={s.container}>
                {popularMovies?.map((movie) => (
                    <MovieCard key={movie.id} imgSrc={movie.poster_path} title={movie.title} />
                ))}
            </div>
        </div>
    )
}