import s from './MoviePage.module.css'
import {useParams} from "react-router";
import {getSlicedArray} from "@/common/utils/getSlicedArray.ts";
import {useGetMovieDetailQuery} from "@/common/api/moviesApi.ts";
import {MovieActors} from "@/pages/MoviePage/MovieActors/MovieActors.tsx";
import {MovieDetail} from "@/pages/MoviePage/MovieDetail/MovieDetail.tsx";
import {SimilarMovies} from "@/pages/MoviePage/SimilarMovies/SimilarMovies.tsx";


export const MoviePage = () => {
    const {movieId} = useParams()
    const {data} = useGetMovieDetailQuery(+movieId!)

    if (!data) return null
    return (
        <section className={s.container}>
            <MovieDetail movie={data} />
            <MovieActors cast={getSlicedArray(data.credits.cast)}/>
            <SimilarMovies movies={getSlicedArray(data.similar.results)}/>
        </section>
    )
}