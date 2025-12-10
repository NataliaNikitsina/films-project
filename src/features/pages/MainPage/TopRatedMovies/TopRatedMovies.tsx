import {useGetTopRatedMovieQuery} from "@/features/moviesApi.ts";
import {MovieCard} from "@/common/components/MovieCard/MovieCard.tsx";
import s from './TopRatedMovies.module.css'

export const TopRatedMovies = () => {
    const {data} = useGetTopRatedMovieQuery({page: 1})
    const topRatedMovies = data?.results.slice(0,6)

    return (
        <div>
            <h3>Top Rated</h3>
            <div className={s.container}>
                {topRatedMovies?.map((movie) => (
                    <MovieCard key={movie.id} imgSrc={movie.poster_path} title={movie.title} />
                ))}
            </div>
        </div>
    )
}