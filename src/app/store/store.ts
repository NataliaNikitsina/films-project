import {appReducer, appSlice} from "@/app/app-slice/app-slice.ts";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-expect-error: no matter
window.store = store
setupListeners(store.dispatch)
