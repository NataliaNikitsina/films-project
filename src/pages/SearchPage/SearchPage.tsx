import "./SearchPage.module.css"
import { selectSearchValue, useSearchMoviesQuery } from "@/app/model";
import { useAppSelector } from "@/common/hooks";
import { MoviesList, Pagination, SearchForm, SkeletonMovies } from "@/common/components";
import { useEffect, useState } from "react";

export function SearchPage() {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const searchValue = useAppSelector(selectSearchValue)
  const {data, isLoading} = useSearchMoviesQuery({query: searchValue, page: currentPage}, {skip: !searchValue})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [data])

  return (
          <section>
            <h2>Search Results</h2>
            <SearchForm/>
            {isLoading && <SkeletonMovies/>}
            {!searchValue && <p>Enter a movie title to start searching...</p>}
            {data?.results.length === 0 && searchValue && <p>No matches found for {`"${searchValue}"`}</p>}
            {data && searchValue && <>
              <MoviesList movies={data.results}/>
              <Pagination
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      pagesCount={data.total_pages || 1}
              />
            </>}
          </section>
  )
}

