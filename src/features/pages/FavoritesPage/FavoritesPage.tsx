import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectFavoriteMovies} from "@/app/app-slice.ts";


export function FavoritesPage() {
    const favoritesMovies = useAppSelector(selectFavoriteMovies);

    return (
        <>
            <MoviesList movies={favoritesMovies}/>
        </>
    )
}

