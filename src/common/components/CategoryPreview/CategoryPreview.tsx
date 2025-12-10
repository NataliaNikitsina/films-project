import type {Movie} from "@/common/types/types.ts";
import {NavLink} from "react-router";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {PATH} from "@/common/constants/constants.ts";

type Props = {
    title: string
    data: Movie[]
    linkPath: string
}

export const CategoryPreview = ({title, data, linkPath}: Props) => {

    return (
        <div>
            <h3>{title}</h3>
            <NavLink to={`${PATH.CATEGORY_MOVIES_PAGE}/${linkPath}`}>View more</NavLink>
            <MoviesList movies={data} />
        </div>
    )
}