import { createAsyncThunk } from '@reduxjs/toolkit';

import { ApiResponse, AppDispatch, State } from '../types';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../constants';

export const fetchUserAction = createAsyncThunk<ApiResponse, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchUsers',
  async (query: string, { dispatch, extra: api }) => {
    const { data } = await api.get<ApiResponse>(`${ApiRoute.Users}?q=${query}`);
    return data;
  }
);
