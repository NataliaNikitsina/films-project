import {useGetUpcomingMovieQuery} from "@/features/moviesApi.ts";
import {MovieCard} from "@/common/components/MovieCard/MovieCard.tsx";
import s from './UpcomingMovies.module.css'

export const UpcomingMovies = () => {
    const {data} = useGetUpcomingMovieQuery({page: 1})
    const upcomingMovies = data?.results.slice(0,6)

    return (
        <div>
            <h3>Upcoming Movies</h3>
            <div className={s.container}>
                {upcomingMovies?.map((movie) => (
                    <MovieCard key={movie.id} imgSrc={movie.poster_path} title={movie.title} />
                ))}
            </div>
        </div>
    )
}