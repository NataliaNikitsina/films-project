import {createSlice} from '@reduxjs/toolkit';
import {type Filter} from '@/common/types/types.ts';
import {SORT_BY} from '@/common/constants/constants.ts';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: {
      sort: SORT_BY.POPULARITY_DESC,
      rating: [0, 10],
      genres: '',
    } as Filter,
  },
  selectors: {
    selectFilter: (state) => state.filter,
  },
  reducers: (create) => ({
    changeFilter: create.reducer<Filter>((state, action) => {
      state.filter = {...state.filter, ...action.payload};
    }),
  }),
});

export const filterReducer = filterSlice.reducer;
export const {changeFilter} = filterSlice.actions;
export const {selectFilter} = filterSlice.selectors;
