import s from './Filter.module.css';
import {SortSelect} from '@/pages/FilteredMoviesPage/Filter/SortSelect';
import {GenresList} from '@/pages/FilteredMoviesPage/Filter/GenresList';
import {RatingSliderWithResetButton} from '@/pages/FilteredMoviesPage/Filter/RatingSlider';

export const Filter = () => {
  return (
    <aside className={s.filter}>
      <h3>Filters/Sort</h3>
      <SortSelect />
      <GenresList />
      <RatingSliderWithResetButton />
    </aside>
  );
};
