import {createSlice} from "@reduxjs/toolkit";
import type {Movie} from "@/common/types/types.ts";

export type ThemeMode = "dark" | "light"

export const appSlice = createSlice({
    name: "app",
    initialState: {
        themeMode: "light" as ThemeMode,
        favoriteMovies: [] as Movie[],
    },
    selectors: {
        selectThemeMode: state => state.themeMode,
        selectFavoriteMovies: state => state.favoriteMovies
    },
    reducers: (create) => ({
        changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
            state.themeMode = action.payload.themeMode
        }),
        addFavoriteMovieAC: create.reducer<{movie: Movie}>((state, action) => {
            state.favoriteMovies.unshift(action.payload.movie);
        }),
        deleteFavoriteMovieAC: create.reducer<{movieId: number}>((state, action) => {
            const index = state.favoriteMovies.findIndex(movie => movie.id === action.payload.movieId)
            if (index !== -1) state.favoriteMovies.splice(index, 1)
        }),
    }),
})

export const appReducer = appSlice.reducer
export const {changeThemeModeAC, addFavoriteMovieAC, deleteFavoriteMovieAC} = appSlice.actions
export const {selectThemeMode, selectFavoriteMovies} = appSlice.selectors
