import "react-range-slider-input/dist/style.css";
import {Filter} from "@/pages/FilteredMoviesPage/Filter/Filter.tsx";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {useGetFilteredMoviesQuery} from "@/common/api/moviesApi.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectFilter} from "@/pages/FilteredMoviesPage/filter-slice.ts";
import s from './FilteredMoviesPage.module.css'
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useEffect, useState} from "react";
import {SkeletonMovies} from "@/common/components/Skeleton/SkeletonMovies.tsx";


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

