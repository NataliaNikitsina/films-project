import s from './Filter.module.css'
import 'react-range-slider-input/dist/style.css';
import {SortSelect} from "@/pages/FilteredMoviesPage/Filter/SortSelect/SortSelect.tsx";
import {RatingSliderWithResetButton} from "@/pages/FilteredMoviesPage/Filter/RatingSlider";
import {GenresList} from "@/pages/FilteredMoviesPage/Filter/GenresList";


export const Filter = () => {
    return (
        <aside className={s.filter}>
            <h3>Filters/Sort</h3>
            <SortSelect/>
            <GenresList/>
            <RatingSliderWithResetButton/>
        </aside>
    )

}