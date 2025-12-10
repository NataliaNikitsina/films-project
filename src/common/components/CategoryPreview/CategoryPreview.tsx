import {MovieCard} from "@/common/components/MovieCard/MovieCard.tsx";
import s from './CategoryPreview.module.css'
import type {Movie} from "@/common/types/types.ts";
import {NavLink} from "react-router";

type Props = {
    title: string
    data: Movie[]
    linkPath: string
}

export const CategoryPreview = ({title, data, linkPath}: Props) => {

    return (
        <div>
            <h3>{title}</h3>
            <NavLink to={linkPath}>View more</NavLink>
            <div className={s.container}>
                {data.map((movie) => (
                    <MovieCard key={movie.id} imgSrc={movie.poster_path} title={movie.title} />
                ))}
            </div>
        </div>
    )
}