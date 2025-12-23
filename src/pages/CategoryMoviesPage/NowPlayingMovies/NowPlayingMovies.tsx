import {useState} from "react";
import {MoviesList, Pagination, SkeletonMovies} from "@/common/components";
import {useGetNowPlayingMovieQuery} from "@/pages/api";
import {SECTION_LABELS} from "@/common/constants";



export const NowPlayingMovies = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data, isLoading} = useGetNowPlayingMovieQuery({page: currentPage})

    if (isLoading) {
        return <SkeletonMovies/>
    }

    return (
        <div>
            <h3>{SECTION_LABELS.NOW_PLAYING_MOVIES}</h3>
            {data && <MoviesList movies={data.results}/>}
            {data && <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesCount={data.total_pages || 1}
            />}
        </div>
    )
}