import { AppData, RequestStatus } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Namespace } from '../../constants';
import { fetchUserAction } from '../api-actions';

const initialState: AppData = {
  users: [],
  total: 0,
  incompleteResults: false,
  status: RequestStatus.Idle,
  currentPage: 1
};

export const appData = createSlice({
  name: Namespace.Data,
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    resetUsers(state) {
      state.users = [];
      state.total = 0;
    }
  },
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

export const { setPage, resetUsers } = appData.actions;
