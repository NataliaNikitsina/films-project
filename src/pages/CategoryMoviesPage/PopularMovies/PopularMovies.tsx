import {useEffect, useState} from "react";
import {useGetPopularMovieQuery} from "@/pages/api";
import {MoviesList, Pagination, SkeletonMovies} from "@/common/components";
import {SECTION_LABELS} from "@/common/constants";



export const PopularMovies = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data, isLoading} = useGetPopularMovieQuery({page: currentPage})
    useEffect(() => {window.scrollTo(0, 0)}, [data])

    if (isLoading) {
        return <SkeletonMovies/>
    }

    return (
        <div>
            <h2>{SECTION_LABELS.POPULAR_MOVIES}</h2>
            {data && <MoviesList movies={data.results}/>}
            {data && <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesCount={data.total_pages || 1}
            />}
        </div>
    )
}