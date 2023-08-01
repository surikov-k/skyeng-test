export enum AppRoute {
  Root = '/',
  Details = 'user/:login',
}

export const BASE_URL = 'https://api.github.com/';
export const REQUEST_TIMEOUT = 5000;

export enum ApiRoute {
  SearchUsers = 'search/users',
  Users = 'users',
}

export enum Namespace {
  App = 'APP',
  Data = 'DATA',
}

export const USERS_PER_PAGE = 30;
