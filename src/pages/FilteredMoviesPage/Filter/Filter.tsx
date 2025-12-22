import RangeSlider from "react-range-slider-input";
import {type Sort_by} from "@/common/types/types.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {changeFilterAC, selectFilter} from "@/pages/FilteredMoviesPage/filter-slice.ts";
import {type ChangeEvent, useEffect, useState} from "react";
import s from './Filter.module.css'
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {SORT_BY} from "@/common/constants/constants.ts";
import {useGetGenresQuery} from "@/common/api/moviesApi.ts";


export const Filter = () => {
    const filter = useAppSelector(selectFilter)
    const [value, setValue] = useState<[number, number]>([0, 10]);
    const [debounced, setDebounced] = useState<[number, number]>([0, 10])

    const dispatch = useAppDispatch();

    const {data: genres} = useGetGenresQuery()

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), 200)
        return () => clearTimeout(handler)
    }, [value])

    useEffect(() => {
        dispatch(changeFilterAC({
            'vote_average.gte': debounced[0],
            'vote_average.lte': debounced[1]
        }))
    }, [debounced, dispatch])


    const handleSelectFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeFilterAC({
            sort_by: e.currentTarget.value as Sort_by,
        }))
    }

    const handleGenresFilter = (genreId: number) => {
        const genreIdString = genreId.toString();
        const genresArr = filter.with_genres.split(',')
        if (genresArr.includes(genreIdString)) {
            const filteredGenres = genresArr.filter(el => el !== genreIdString)
            dispatch(changeFilterAC({
                with_genres: filteredGenres.join(',')
            }))
            return
        }
        dispatch(changeFilterAC({
            with_genres: genreIdString + ',' + filter.with_genres,
        }))
    }

    const handleResetFilter = () => {
        dispatch(changeFilterAC({
            sort_by: SORT_BY.POPULARITY_DESC,
            'vote_average.gte': 0,
            'vote_average.lte': 10,
            with_genres: '',
        }))
        setValue([0, 10])
    }

    return (
        <aside className={s.container}>
            <h2 className={s.title}>Filters/Sort</h2>
            <div>
                <label className={s.sortLabel}>Sort By:
                    <select className={s.sortSelect} value={filter.sort_by} onChange={handleSelectFilter}>
                        <option value={SORT_BY.POPULARITY_DESC}>Popularity ↓</option>
                        <option value={SORT_BY.POPULARITY_ASC}>Popularity ↑</option>
                        <option value={SORT_BY.RATING_DESC}>Rating ↓</option>
                        <option value={SORT_BY.RATING_ASC}>Rating ↑</option>
                        <option value={SORT_BY.RELEASE_DATE_DESC}>Release date ↓</option>
                        <option value={SORT_BY.RELEASE_DATE_ASC}>Release date ↑</option>
                        <option value={SORT_BY.TITLE_DESC}>Title A-Z</option>
                        <option value={SORT_BY.TITLE_ASC}>Title Z-A</option>
                    </select>
                </label>
            </div>
            <div className={s.ratingWrapper}>
                <div className={s.ratingInfo}>
                    <span>Rating</span>
                    <span>{`${debounced[0]} - ${debounced[1]}`}</span>
                </div>
                <div>
                    <RangeSlider min={0} max={10} step={0.1} value={value} onInput={setValue}/>
                </div>
            </div>
            <div className={s.genresWrapper}>
                {genres?.genres.map((genre) => (<button
                    className={filter.with_genres.includes(genre.id.toString()) ? `${s.genreButton} ${s.active}` : s.genreButton}
                    key={genre.id} onClick={() => handleGenresFilter(genre.id)}>{genre.name}</button>))}
            </div>
            <div>
                <button className={`${s.genreButton} ${s.reset}`} onClick={handleResetFilter}>Reset filters</button>
            </div>
        </aside>
    )

}