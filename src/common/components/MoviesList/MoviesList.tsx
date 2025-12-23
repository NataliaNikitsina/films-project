import {MovieCard} from "@/common/components/MovieCard/MovieCard.tsx";
import type {Movie} from "@/common/types/types.ts";
import s from './MoviesList.module.css'

type Props = {
    movies: Movie[]
}

export const MoviesList = ({movies}: Props) => {
    return (
        <section className={s.container}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </section>
    )
}