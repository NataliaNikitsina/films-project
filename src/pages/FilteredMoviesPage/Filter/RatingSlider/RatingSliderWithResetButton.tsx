import s from "./RatingSliderWithResetButton.module.css";
import './rangeSlider.css'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { SORT_BY } from "@/common/constants";
import { changeFilter, selectFilter } from "@/pages/FilteredMoviesPage/model";


export const RatingSliderWithResetButton = () => {
  const filter = useAppSelector(selectFilter)
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<[number, number]>([0, 10]);
  const [debounced, setDebounced] = useState<[number, number]>([0, 10])

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), 200)
    return () => clearTimeout(handler)
  }, [value])

  useEffect(() => {
    dispatch(changeFilter({rating: [debounced[0], debounced[1]]}))
  }, [debounced, dispatch])

  const handleResetFilter = () => {
    dispatch(changeFilter({
      sort: SORT_BY.POPULARITY_DESC,
      rating: [0, 10],
      genres: '',
    }))
    setValue([0, 10])
  }


  return (
          <div className={s.container}>
            <div className={s.rating}>
              <h4>Rating</h4>
              <span>{`${filter.rating![0]} - ${filter.rating![1]}`}</span>
            </div>
            <RangeSlider min={0} max={10} step={0.1} value={value} onInput={setValue} id="range-slider"/>
            <button className={s.reset} onClick={handleResetFilter}>Reset filters</button>
          </div>
  )
}