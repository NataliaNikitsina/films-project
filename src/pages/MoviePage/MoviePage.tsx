import s from './MoviePage.module.css'
import {useParams} from "react-router";
import {SkeletonMovieDetail} from "@/common/components";
import {MovieDetail} from "@/pages/MoviePage/MovieDetail";
import {MovieActors} from "@/pages/MoviePage/MovieActors";
import {getSlicedArray} from "@/common/utils";
import {SimilarMovies} from "@/pages/MoviePage/SimilarMovies";
import { useGetMovieDetailQuery } from "@/app/model";


export const MoviePage = () => {
    const {movieId} = useParams()
    const {data, isLoading} = useGetMovieDetailQuery(movieId!)

    if (isLoading) return <SkeletonMovieDetail/>

    return (
        data && <section className={s.container}>
            <MovieDetail movie={data}/>
            <MovieActors cast={getSlicedArray(data.credits.cast)}/>
            <SimilarMovies movies={getSlicedArray(data.similar.results)}/>
        </section>
    )
}