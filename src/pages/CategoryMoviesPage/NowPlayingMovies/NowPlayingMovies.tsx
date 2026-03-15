import {useEffect, useState} from 'react';
import {MoviesList, Pagination, SkeletonMovies} from '@/common/components';
import {SECTION_LABELS} from '@/common/constants';
import {useGetNowPlayingMovieQuery} from '@/app/api';

export const NowPlayingMovies = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const {data, isLoading} = useGetNowPlayingMovieQuery({page: currentPage});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  if (isLoading) {
    return <SkeletonMovies />;
  }

  return (
    <div>
      <h2>{SECTION_LABELS.NOW_PLAYING_MOVIES}</h2>
      {data && <MoviesList movies={data.results} />}
      {data && (
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={data.total_pages || 1} />
      )}
    </div>
  );
};
