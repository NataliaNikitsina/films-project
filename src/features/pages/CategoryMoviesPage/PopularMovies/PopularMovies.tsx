import {useGetPopularMovieQuery} from "@/features/moviesApi.ts";
import {MovieCard} from "@/common/components/MovieCard/MovieCard.tsx";

export const PopularMovies = () => {
    const {data} = useGetPopularMovieQuery({page: 1})
    return (
        <div>
            <h3>Popular Movies</h3>
            <div>
                {data?.results.map((movie) => (
                    <MovieCard key={movie.id} imgSrc={movie.poster_path} title={movie.title} />
                ))}
            </div>
        </div>
    )
}