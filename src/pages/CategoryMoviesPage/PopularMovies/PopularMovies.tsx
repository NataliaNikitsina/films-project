import {useGetPopularMovieQuery} from "@/features/api/moviesApi.ts";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useState} from "react";
import {SECTION_LABELS} from "@/common/constants/constants.ts";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";

export const PopularMovies = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data} = useGetPopularMovieQuery({page: currentPage})

    return (
        <div>
            <h3>{SECTION_LABELS.POPULAR_MOVIES}</h3>
            {data && <MoviesList movies={data.results}/>}
            {data && <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesCount={data.total_pages || 1}
            />}
        </div>
    )
}