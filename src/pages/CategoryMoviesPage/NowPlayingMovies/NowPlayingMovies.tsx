import {useEffect, useState} from "react";
import {MoviesList, Pagination, SkeletonMovies} from "@/common/components";
import {useGetNowPlayingMovieQuery} from "@/pages/api";
import {SECTION_LABELS} from "@/common/constants";



export const NowPlayingMovies = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data, isLoading} = useGetNowPlayingMovieQuery({page: currentPage})
    useEffect(() => {window.scrollTo(0, 0)}, [data])

    if (isLoading) {
        return <SkeletonMovies/>
    }

    return (
        <div>
            <h2>{SECTION_LABELS.NOW_PLAYING_MOVIES}</h2>
            {data && <MoviesList movies={data.results}/>}
            {data && <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesCount={data.total_pages || 1}
            />}
        </div>
    )
}