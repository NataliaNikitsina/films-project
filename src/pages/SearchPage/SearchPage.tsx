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
            <h2>Search Results</h2>
            <SearchForm/>
            {isLoading && <SkeletonMovies/>}
            {!searchValue && <p>Enter a movie title to start searching...</p>}
            {data?.results.length === 0 && <p>No matches found for {`"${searchValue}"`}</p>}
            {data && searchValue && <MoviesList movies={data ? data.results : []} />}
        </section>
    )
}

