import {useState} from "react";
import {SECTION_LABELS} from "@/common/constants";
import {useGetUpcomingMovieQuery} from "@/pages/api";
import {MoviesList, Pagination, SkeletonMovies} from "@/common/components";

export const UpcomingMovies = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data, isLoading} = useGetUpcomingMovieQuery({page: currentPage})

    if (isLoading) {
        return <SkeletonMovies/>
    }

    return (
        <div>
            <h3>{SECTION_LABELS.UPCOMING_MOVIES}</h3>
            {data && <MoviesList movies={data.results}/>}
            {data && <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesCount={data.total_pages || 1}
            />}
        </div>
    )
}