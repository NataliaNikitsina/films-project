import s from "./SortSelect.module.css";
import {SORT_BY} from "@/common/constants";
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {changeFilterAC, selectFilter} from "@/pages/FilteredMoviesPage/api";
import type {ChangeEvent} from "react";
import type {Sort_by} from "@/common/types";

export const SortSelect = () => {
    const filter = useAppSelector(selectFilter)
    const dispatch = useAppDispatch();

    const handleSelectFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeFilterAC({
            sort: e.currentTarget.value as Sort_by,
        }))
    }

    return (
        <label className={s.sortLabel}>Sort By:
            <select className={s.sortSelect} value={filter.sort} onChange={handleSelectFilter}>
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
    )
}