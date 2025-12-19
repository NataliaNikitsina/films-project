import {useState} from "react";
import {useGetNowPlayingMovieQuery} from "@/common/api/moviesApi.ts";
import {SECTION_LABELS} from "@/common/constants/constants.ts";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {SkeletonMovies} from "@/common/components/SkeletonMovies/SkeletonMovies.tsx";


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