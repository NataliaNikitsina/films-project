import {useState} from "react";
import {useGetPopularMovieQuery} from "@/pages/api";
import {MoviesList, Pagination, SkeletonMovies} from "@/common/components";
import {SECTION_LABELS} from "@/common/constants";



export const PopularMovies = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data, isLoading} = useGetPopularMovieQuery({page: currentPage})

    if (isLoading) {
        return <SkeletonMovies/>
    }

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