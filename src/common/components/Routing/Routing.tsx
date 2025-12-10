import {Route, Routes} from "react-router";
import {PATH} from "@/common/constants/constants.ts";
import {Main} from "@/features/pages/MainPage/Main.tsx";
import {CategoryMoviesPage} from "@/features/pages/CategoryMoviesPage/CategoryMoviesPage.tsx";
import {FilteredMoviesPage} from "@/features/pages/FilteredMoviesPage/FilteredMoviesPage.tsx";
import {SearchPage} from "@/features/pages/SearchPage/SearchPage.tsx";
import {FavoritesPage} from "@/features/pages/FavoritesPage/FavoritesPage.tsx";


export function Routing() {
    return (
        <Routes>
            <Route path={PATH.MAIN_PAGE} element={<Main/>}/>
            <Route path={PATH.CATEGORY_MOVIES_PAGE} element={<CategoryMoviesPage/>}>
                <Route path={PATH.FILTERED_MOVIES_PAGE} element={<FilteredMoviesPage/>}/>
                <Route path={PATH.FILTERED_MOVIES_PAGE} element={<FilteredMoviesPage/>}/>
                <Route path={PATH.FILTERED_MOVIES_PAGE} element={<FilteredMoviesPage/>}/>
                <Route path={PATH.FILTERED_MOVIES_PAGE} element={<FilteredMoviesPage/>}/>
            </Route>
            <Route path={PATH.FILTERED_MOVIES_PAGE} element={<FilteredMoviesPage/>}/>
            <Route path={PATH.SEARCH_PAGE} element={<SearchPage/>}/>
            <Route path={PATH.FAVORITES_MOVIES_PAGE} element={<FavoritesPage/>}/>
        </Routes>
    )
}

