import {PopularMovies} from "@/features/pages/MainPage/PopularMovies/PopularMovies.tsx";
import {TopRatedMovies} from "@/features/pages/MainPage/TopRatedMovies/TopRatedMovies.tsx";
import {UpcomingMovies} from "@/features/pages/MainPage/UpcomingMovies/UpcomingMovies.tsx";
import {NowPlayingMovies} from "@/features/pages/MainPage/NowPlayingMovies/NowPlayingMovies.tsx";


export function Main() {

    //const randomCover =base_url + 'original' + data?.results[getRandomNumber(data.results.length)].poster_path

    return (
        <>
            {/*//<img src={randomCover} alt={'cover'} width='100%' height={'500px'}/>*/}
            <PopularMovies/>
            <TopRatedMovies/>
            <UpcomingMovies/>
            <NowPlayingMovies/>
        </>
    )
}

