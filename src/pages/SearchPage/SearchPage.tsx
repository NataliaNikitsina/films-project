import {useSearchMoviesQuery} from "@/pages/api/moviesApi.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectSearchValue} from "@/app/app-slice.ts";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {SearchForm} from "@/common/components/SearchForm/SearchForm.tsx";
import {SkeletonMovies} from "@/common/components/SkeletonMovies/SkeletonMovies.tsx";
//import s from './SearchPage.module.css'

export function SearchPage() {
    const searchValue = useAppSelector(selectSearchValue)
    const {data, isLoading} = useSearchMoviesQuery({query: searchValue}, {skip: !searchValue})

    return (
        <section>
            <h2>Search Results</h2>
            <SearchForm/>
            {!data && <p>Enter a movie title to start searching...</p>}
            {isLoading && <SkeletonMovies/>}
            {data?.results.length === 0 && <p>No matches found for {`"${searchValue}"`}</p>}
            {data && <MoviesList movies={data ? data.results : []} />}
        </section>
    )
}

