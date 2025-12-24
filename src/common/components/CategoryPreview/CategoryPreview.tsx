import s from './CategoryPreview.module.css'
import {NavLink} from "react-router";
import type {Movie} from "@/common/types";
import {MoviesList} from "@/common/components";
import {PATH} from "@/common/constants";

type Props = {
    title: string
    data: Movie[]
    linkPath: string
}

export const CategoryPreview = ({title, data, linkPath}: Props) => {

    return (
        <div className={s.preview}>
            <div className={s.header}>
                <h3 className={s.title}>{title}</h3>
                <NavLink className={s.link} to={`${PATH.CATEGORY_MOVIES_PAGE}/${linkPath}`}>View more</NavLink>
            </div>
            <MoviesList movies={data} />
        </div>
    )
}