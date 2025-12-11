import {SECTION_LABELS} from "@/common/constants/constants.ts";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useState} from "react";
import {useGetTopRatedMovieQuery} from "@/features/api/moviesApi.ts";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";

export const TopRatedMovies = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data} = useGetTopRatedMovieQuery({page: currentPage})

    return (
        <div>
            <h3>{SECTION_LABELS.TOP_RATED_MOVIES}</h3>
            {data && <MoviesList movies={data.results}/>}
            {data && <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesCount={data.total_pages || 1}
            />}
        </div>
    )
}