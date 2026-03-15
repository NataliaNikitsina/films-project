import 'react-range-slider-input/dist/style.css';
import s from './FilteredMoviesPage.module.css';
import {useEffect, useState} from 'react';
import {useAppSelector} from '@/common/hooks';
import {Filter} from '@/pages/FilteredMoviesPage/Filter';
import {MoviesList, Pagination, SkeletonMovies} from '@/common/components';
import {SECTION_LABELS} from '@/common/constants';
import {useGetFilteredMoviesQuery} from '@/app/api';
import {selectFilter} from '@/pages/FilteredMoviesPage/model';

export function FilteredMoviesPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const filter = useAppSelector(selectFilter);

  const {data, currentData, isLoading} = useGetFilteredMoviesQuery({
    page: currentPage,
    sort_by: filter.sort,
    'vote_average.gte': filter.rating ? filter.rating[0] : undefined,
    'vote_average.lte': filter.rating ? filter.rating[1] : undefined,
    with_genres: filter.genres,
  });

  useEffect(() => {
    if (currentData) window.scrollTo(0, 0);
  }, [currentData]);

  return (
    <section className={s.container}>
      <Filter />
      <div className={s.movies}>
        <h2>{SECTION_LABELS.FILTERED_MOVIES_PAGE}</h2>
        {isLoading && <SkeletonMovies />}
        {data && (
          <>
            <MoviesList movies={data.results} />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={data.total_pages || 1} />
          </>
        )}
      </div>
    </section>
  );
}
