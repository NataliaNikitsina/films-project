import {useEffect} from "react";
import {selectFavoriteMovies} from "@/app";
import {useAppSelector} from "@/common/hooks";
import {MoviesList} from "@/common/components";


export function FavoritesPage() {
    const favoritesMovies = useAppSelector(selectFavoriteMovies);

    useEffect(() => {
        localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));
    }, [favoritesMovies]);

    return (
        <>
            <MoviesList movies={favoritesMovies}/>
        </>
    )
}

