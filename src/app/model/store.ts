import {appReducer, appSlice} from "@/app/model/app-slice.ts";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {baseApi} from "@/app/model/base-api.ts";
import {filterReducer, filterSlice} from "@/pages/FilteredMoviesPage/model/filter-slice.ts";

const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [filterSlice.name]: filterReducer,
    [baseApi.reducerPath]: baseApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-expect-error: no matter
window.store = store
setupListeners(store.dispatch)
