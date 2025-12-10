import {useGetNowPlayingMovieQuery} from "@/features/moviesApi.ts";
import {MovieCard} from "@/common/components/MovieCard/MovieCard.tsx";
import s from './NowPlayingMovies.module.css'

export const NowPlayingMovies = () => {
    const {data} = useGetNowPlayingMovieQuery({page: 1})
    const nowPlayingMovies = data?.results.slice(0,6)

    return (
        <div>
            <h3>Now Playing Movies</h3>
            <div className={s.container}>
                {nowPlayingMovies?.map((movie) => (
                    <MovieCard key={movie.id} imgSrc={movie.poster_path} title={movie.title} />
                ))}
            </div>
        </div>
    )
}