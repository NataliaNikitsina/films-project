import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectFavoriteMovies} from "@/app/app-slice.ts";
import {useEffect} from "react";


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

