import {useEffect} from "react";
import {selectFavoriteMovies} from "@/app";
import {useAppSelector} from "@/common/hooks";
import {MoviesList} from "@/common/components";
import {SECTION_LABELS} from "@/common/constants";
import s from "./FavoritesPage.module.css"


export function FavoritesPage() {
    const favoritesMovies = useAppSelector(selectFavoriteMovies);

    useEffect(() => {
        localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));
    }, [favoritesMovies]);

    return (
        <section className={s.container}>
            <h2>{SECTION_LABELS.FAVORITES_MOVIES_PAGE}</h2>
            <MoviesList movies={favoritesMovies}/>
        </section>
    )
}

