import {useEffect, useState} from "react";
import {SECTION_LABELS} from "@/common/constants";
import {MoviesList, Pagination, SkeletonMovies} from "@/common/components";
import { useGetUpcomingMovieQuery } from "@/app/model";

export const UpcomingMovies = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const {data, isLoading} = useGetUpcomingMovieQuery({page: currentPage})
    useEffect(() => {window.scrollTo(0, 0)}, [data])

    if (isLoading) {
        return <SkeletonMovies/>
    }

    return (
        <div>
            <h2>{SECTION_LABELS.UPCOMING_MOVIES}</h2>
            {data && <MoviesList movies={data.results}/>}
            {data && <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesCount={data.total_pages || 1}
            />}
        </div>
    )
}