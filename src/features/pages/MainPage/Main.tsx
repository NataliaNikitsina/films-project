import {useGetPopularMovieQuery} from "@/features/moviesApi.ts";
import {getRandomNumber} from "@/common/utils/getRandomNumber.ts";

const base_url = 'http://image.tmdb.org/t/p/'
const file_size = 'w185'
const imagePath = base_url + file_size

export function Main() {
    const page =2
    const {data} = useGetPopularMovieQuery({page: page || 1})
    const randomCover =base_url + 'original' + data?.results[getRandomNumber(data.results.length)].poster_path

    const popularMovies = data?.results.slice(0,6)

    return (
        <>
            <img src={randomCover} alt={'cover'} width='100%' height={'500px'}/>
            <div>
                {popularMovies?.map((movie) => (
                    <img src={ imagePath + movie.poster_path} alt={'cover'}/>
                ))}
            </div>
        </>
    )
}

