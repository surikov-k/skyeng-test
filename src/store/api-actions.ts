import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import { SearchQueryParams, SearchResult, SortingOrder, UserDetails, UserDetailsResponse } from '../types';
import { ApiRoute } from '../constants';
import { SearchSorting } from '../types/search-sorting.enum';

export type ApiError = {
  message: string;
};

export const searchUsers = createAsyncThunk<SearchResult, SearchQueryParams, {
  extra: AxiosInstance;
  rejectValue: string;
}>(
  'data/searchUsers',
  async ({
    query,
    page = 1,
    order = SortingOrder.Desc,
    sort = SearchSorting.Repositories
  }: SearchQueryParams, { extra: api, rejectWithValue }) => {
    const queryString = `?q=${query}&sort=${sort}&order=${order}&page=${page}`;

    let response;
    try {
      response = await api
        .get<SearchResult>(`${ApiRoute.SearchUsers}${queryString}`);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const error = e as AxiosError<ApiError>;
        const { data } = error.response as AxiosResponse<ApiError>;

        return rejectWithValue(data.message);
      }
      throw e;
    }

    return response.data;
  }
);

export const fetchUser = createAsyncThunk<UserDetails, string, {
  extra: AxiosInstance;
  rejectValue: string;
}>(
  'data/fetchUser',
  async (login: string, { extra: api, rejectWithValue }) => {

    let response;
    try {
      response = await api
        .get<UserDetailsResponse>(`${ApiRoute.Users}/${login}`);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const error = e as AxiosError<ApiError>;
        const { data } = error.response as AxiosResponse<ApiError>;

        return rejectWithValue(data.message);
      }
      throw e;
    }

    const { data } = response;

    const userDetails: UserDetails = {
      ...data,
      avatar: data.avatar_url,
      url: data.html_url,
      name: data.name,
      publicRepos: data.public_repos,
      createdAt: data.created_at,
    };

    return userDetails;
  }
);
