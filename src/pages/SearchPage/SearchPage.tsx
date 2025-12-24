import "./SearchPage.module.css"
import {selectSearchValue} from "@/app";
import {useAppSelector} from "@/common/hooks";
import {useSearchMoviesQuery} from "@/pages/api";
import {MoviesList, SearchForm, SkeletonMovies} from "@/common/components";

export function SearchPage() {
    const searchValue = useAppSelector(selectSearchValue)
    const {data, isLoading} = useSearchMoviesQuery({query: searchValue}, {skip: !searchValue})

    return (
        <section>
            <h1>Search Results</h1>
            <SearchForm/>
            {!data && <p>Enter a movie title to start searching...</p>}
            {isLoading && <SkeletonMovies/>}
            {data?.results.length === 0 && <p>No matches found for {`"${searchValue}"`}</p>}
            {data && <MoviesList movies={data ? data.results : []} />}
        </section>
    )
}

