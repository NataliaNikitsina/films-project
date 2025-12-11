import {useState} from "react";
import {useGetNowPlayingMovieQuery} from "@/features/moviesApi.ts";
import {SECTION_LABELS} from "@/common/constants/constants.ts";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";


export const NowPlayingMovies = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const {data} = useGetNowPlayingMovieQuery({page: currentPage})

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