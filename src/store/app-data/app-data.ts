import { AppData, RequestStatus } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Namespace } from '../../constants';
import { fetchUser, searchUsers } from '../api-actions';

const initialState: AppData = {
  users: [],
  details: null,
  total: 0,
  incompleteResults: false,
  status: RequestStatus.Idle,
  error: '',
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
    },
    resetError(state) {
      state.status = RequestStatus.Idle;
      state.error = '';
    }
  },
  extraReducers(builder) {
    builder
      .addCase(searchUsers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.users = action.payload.items;
        state.total = action.payload.total_count;
        state.incompleteResults = action.payload.incomplete_results;
        state.status = RequestStatus.Idle;
        state.error = '';
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.status = RequestStatus.Error;
        if (action.payload) {
          state.error = action.payload;
        }
      });

    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = RequestStatus.Loading;
        state.error = '';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.details = action.payload;
        state.status = RequestStatus.Idle;
        state.error = '';
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = RequestStatus.Error;
        if (action.payload) {
          state.error = action.payload;
        }
      });
  }
});

export const { setPage, resetUsers, resetError } = appData.actions;
