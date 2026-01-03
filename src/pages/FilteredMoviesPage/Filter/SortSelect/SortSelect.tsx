import s from "./SortSelect.module.css";
import { SORT_BY } from "@/common/constants";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import type { ChangeEvent } from "react";
import type { SortBy } from "@/common/types";
import { changeFilter, selectFilter } from "@/pages/FilteredMoviesPage/model";

const options = [
  {value: SORT_BY.POPULARITY_DESC, label: 'Popularity ↓'},
  {value: SORT_BY.POPULARITY_ASC, label: 'Popularity ↑'},
  {value: SORT_BY.RATING_DESC, label: 'Rating ↓'},
  {value: SORT_BY.RATING_ASC, label: 'Rating ↑'},
  {value: SORT_BY.RELEASE_DATE_DESC, label: 'Release date ↓'},
  {value: SORT_BY.RELEASE_DATE_ASC, label: 'Release date ↑'},
  {value: SORT_BY.TITLE_DESC, label: 'Title A-Z'},
  {value: SORT_BY.TITLE_ASC, label: 'Title Z-A'},
]

export const SortSelect = () => {
  const filter = useAppSelector(selectFilter)
  const dispatch = useAppDispatch();

  const handleSelectFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeFilter({sort: e.currentTarget.value as SortBy}))
  }

  return (
          <label className={s.container}>Sort By
            <select className={s.select} value={filter.sort} onChange={handleSelectFilter}>
              {options.map((option, index) => (<option key={index} value={option.value}>{option.label}</option>))}
            </select>
          </label>
  )
}