import s from './Filter.module.css'
import {useAppDispatch} from "@/common/hooks";
import {changeFilterAC} from "@/pages/FilteredMoviesPage/api";
import {SORT_BY} from "@/common/constants";
import 'react-range-slider-input/dist/style.css';
import {SortSelect} from "@/pages/FilteredMoviesPage/Filter/SortSelect/SortSelect.tsx";
import {RatingSlider} from "@/pages/FilteredMoviesPage/Filter/RatingSlider";
import {GenresList} from "@/pages/FilteredMoviesPage/Filter/GenresList";


export const Filter = () => {
    const dispatch = useAppDispatch();
    const handleResetFilter = () => {
        dispatch(changeFilterAC({
            sort: SORT_BY.POPULARITY_DESC,
            rating: [0, 10],
            genres: '',
        }))
    }

    return (
        <aside className={s.filter}>
            <h2>Filters/Sort</h2>
            <SortSelect/>
            <RatingSlider/>
            <GenresList/>
            <button className={s.reset} onClick={handleResetFilter}>Reset filters</button>
        </aside>
    )

}