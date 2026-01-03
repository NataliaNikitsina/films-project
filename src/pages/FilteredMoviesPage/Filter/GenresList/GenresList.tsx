import s from "./GenresList.module.css";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { useGetGenresQuery } from "@/app/model";
import { changeFilter, selectFilter } from "@/pages/FilteredMoviesPage/model";

export const GenresList = () => {
  const filter = useAppSelector(selectFilter)
  const dispatch = useAppDispatch();

  const { data: genres } = useGetGenresQuery()

  const handleGenresFilter = (genreId: number) => {
    const genreIdString = genreId.toString();
    const genresArr = filter.genres?.split(',')
    if ( genresArr?.includes(genreIdString) ) {
      const filteredGenres = genresArr.filter(el => el !== genreIdString)
      dispatch(changeFilter({
        genres: filteredGenres.join(',')
      }))
      return
    }
    dispatch(changeFilter({ genres: genreIdString + ',' + filter.genres }))
  }

  const getGenreClassName = (genreId: number) => {
    return filter.genres?.includes(genreId.toString()) ? `${ s.btn } ${ s.active }` : s.btn
  }

  return (
          <div className={ s.container }>
            <span>Genres</span>
            <div className={ s.genres }>
              { genres?.genres.map((genre) => (
                      <button
                              className={ getGenreClassName(genre.id) }
                              key={ genre.id }
                              onClick={ () => handleGenresFilter(genre.id) }>
                        { genre.name }</button>)) }
            </div>
          </div>
  )
}