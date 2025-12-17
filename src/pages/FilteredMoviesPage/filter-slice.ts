import {createSlice} from "@reduxjs/toolkit";
import {type QueryParams, type Sort_by, SORT_BY} from "@/common/types/types.ts";

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filter: {
            sort_by: SORT_BY.POPULARITY_DESC as Sort_by,
            'vote_average.gte': 0 as number,
            'vote_average.lte': 10 as number,
            with_genres: '' as string,
        }
    },
    selectors: {
        selectFilter: state => state.filter,
    },
    reducers: (create) => ({
        changeFilterAC: create.reducer<QueryParams>((state, action) => {
            state.filter = {...state.filter, ...action.payload}
        }),
    }),
})

export const filterReducer = filterSlice.reducer
export const {changeFilterAC} = filterSlice.actions
export const {selectFilter} = filterSlice.selectors
