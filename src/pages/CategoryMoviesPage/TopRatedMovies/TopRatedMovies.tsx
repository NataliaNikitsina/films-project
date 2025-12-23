import {useState} from "react";
import {useGetTopRatedMovieQuery} from "@/pages/api";
import {MoviesList, Pagination, SkeletonMovies} from "@/common/components";
import {SECTION_LABELS} from "@/common/constants";


export const TopRatedMovies = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data, isLoading} = useGetTopRatedMovieQuery({page: currentPage})

    if (isLoading) {
        return <SkeletonMovies/>
    }

    return (
        <div>
            <h3>{SECTION_LABELS.TOP_RATED_MOVIES}</h3>
            {data && <MoviesList movies={data.results} />}
            {data && <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesCount={data.total_pages || 1}
            />}
        </div>
    )
}