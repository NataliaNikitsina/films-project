import {useSearchMoviesQuery} from "@/common/api/moviesApi.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectSearchValue} from "@/app/app-slice.ts";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {SearchForm} from "@/common/components/SearchForm/SearchForm.tsx";

export function SearchPage() {
    const searchValue = useAppSelector(selectSearchValue)
    const {data} = useSearchMoviesQuery({query: searchValue})

    return (
        <>
            <h2>Search Results</h2>
            <SearchForm/>
            <MoviesList movies={data ? data.results : []} />
        </>
    )
}

