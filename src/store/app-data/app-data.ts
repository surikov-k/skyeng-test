import { AppData, RequestStatus } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../constants';
import { fetchUserAction } from '../api-actions';

const initialState: AppData = {
  users: [],
  total: 0,
  incompleteResults: false,
  status: RequestStatus.Idle,
};

export const appData = createSlice({
  name: Namespace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchUserAction.fulfilled, (state, action) => {
        state.users = action.payload.items;
        state.total = action.payload.total_count;
        state.incompleteResults = action.payload.incomplete_results;
        state.status = RequestStatus.Idle;
      })
      .addCase(fetchUserAction.rejected, (state) => {
        state.status = RequestStatus.Error;
      });
  }
});
