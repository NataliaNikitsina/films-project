import {appReducer, appSlice} from "@/app/app-slice.ts";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {baseApi} from "@/app/baseApi.ts";

const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
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
