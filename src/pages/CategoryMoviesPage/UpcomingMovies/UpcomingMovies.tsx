import {useGetUpcomingMovieQuery} from "@/features/api/moviesApi.ts";
import {useState} from "react";
import {SECTION_LABELS} from "@/common/constants/constants.ts";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";

export const UpcomingMovies = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data} = useGetUpcomingMovieQuery({page: currentPage})

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