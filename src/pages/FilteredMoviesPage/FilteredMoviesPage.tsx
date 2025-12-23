import "react-range-slider-input/dist/style.css";
import s from './FilteredMoviesPage.module.css'
import {useGetFilteredMoviesQuery} from "@/pages/api";
import {useEffect, useState} from "react";
import {useAppSelector} from "@/common/hooks";
import {Filter} from "@/pages/FilteredMoviesPage/Filter";
import {MoviesList, Pagination, SkeletonMovies} from "@/common/components";
import {selectFilter} from "@/pages/FilteredMoviesPage/api";



export function FilteredMoviesPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const filter = useAppSelector(selectFilter)
    const {data, currentData, isLoading} = useGetFilteredMoviesQuery({page: currentPage, ...filter})

    useEffect(() => {
        if(currentData) window.scrollTo(0, 0);
    }, [currentData]);

    return (
        <section className={s.filteredMoviesPage}>
            <Filter/>
            <div className={s.moviesWrapper}>
                {isLoading && <SkeletonMovies/>}
                {data && <MoviesList movies={data.results}/>}
                {data && <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pagesCount={data.total_pages || 1}
                />}
            </div>
        </section>
    )
}

