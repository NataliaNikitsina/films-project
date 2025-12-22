import {SECTION_LABELS} from "@/common/constants/constants.ts";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useState} from "react";
import {useGetTopRatedMovieQuery} from "@/pages/api/moviesApi.ts";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {SkeletonMovies} from "@/common/components/SkeletonMovies/SkeletonMovies.tsx";

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