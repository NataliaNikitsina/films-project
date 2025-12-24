import s from "./GenresList.module.css";
import {changeFilterAC, selectFilter} from "@/pages/FilteredMoviesPage/api";
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {useGetGenresQuery} from "@/pages/api";

export const GenresList = () => {
    const filter = useAppSelector(selectFilter)
    const dispatch = useAppDispatch();

    const {data: genres} = useGetGenresQuery()

    const handleGenresFilter = (genreId: number) => {
        const genreIdString = genreId.toString();
        const genresArr = filter.genres?.split(',')
        if (genresArr?.includes(genreIdString)) {
            const filteredGenres = genresArr.filter(el => el !== genreIdString)
            dispatch(changeFilterAC({
                genres: filteredGenres.join(',')
            }))
            return
        }
        dispatch(changeFilterAC({
            genres: genreIdString + ',' + filter.genres,
        }))
    }

    return (
        <div className={s.container}>
            <span>Genres</span>
            <div className={s.genresWrapper}>
                {genres?.genres.map((genre) => (<button
                    className={filter.genres?.includes(genre.id.toString()) ? `${s.genreButton} ${s.active}` : s.genreButton}
                    key={genre.id} onClick={() => handleGenresFilter(genre.id)}>{genre.name}</button>))}
            </div>
        </div>
    )
}