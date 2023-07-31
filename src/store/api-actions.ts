import { createAsyncThunk } from '@reduxjs/toolkit';

import { ApiResponse, AppDispatch, SearchQueryParams, SortingOrder, State } from '../types';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../constants';
import { SearchSorting } from '../types/search-sorting.enum';

export const fetchUserAction = createAsyncThunk<ApiResponse, SearchQueryParams, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchUsers',
  async ({
    query,
    page = 1,
    order = SortingOrder.Desc,
    sort = SearchSorting.Repositories
  }: SearchQueryParams, { extra: api }) => {
    const queryString = `?q=${query}&sort=${sort}&order=${order}&page=${page}`;
    const { data } = await api.get<ApiResponse>(`${ApiRoute.Users}${queryString}`);
    return data;
  }
);
