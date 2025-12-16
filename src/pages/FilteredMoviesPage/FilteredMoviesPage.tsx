import RangeSlider from 'react-range-slider-input';
import "react-range-slider-input/dist/style.css";
import {useEffect, useState} from "react";
import {useGetFilteredMoviesQuery, useGetGenresQuery} from "@/features/api/moviesApi.ts";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {SORT_BY} from "@/common/types/types.ts";


export function FilteredMoviesPage() {
    const [value, setValue] = useState<[number, number]>([0, 10]);
    const [debounced, setDebounced] = useState<[number, number]>(value)
    const [genresFilter, setGenresParamFilter] = useState<string[]>([])

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), 200)
        return () => clearTimeout(handler)
    }, [value])


    const {data: genres} = useGetGenresQuery()
    const {data: movies} = useGetFilteredMoviesQuery({
        sort_by: SORT_BY.POPULARITY_DESC,
        'vote_average.gte': debounced[0],
        'vote_average.lte': debounced[1],
        with_genres: genresFilter.join(',')
    })

    return (
        <div>
            <RangeSlider min={0} max={10} step={0.1} value={value} onInput={setValue}/>
            <label htmlFor="sort-select">Sort By:</label>
            <select>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            {genres?.genres.map((genre) => (<button key={genre.id}
            onClick={()=>setGenresParamFilter([...genresFilter, genre.id.toString()])}>{genre.name}</button>))}

            <MoviesList movies={movies ? movies.results : []}/>
        </div>
    )
}

