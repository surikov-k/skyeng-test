export enum AppRoute {
  Root = '/',
  Details = 'user/:login',
}

export const BASE_URL = 'https://api.github.com/search/';
export const REQUEST_TIMEOUT = 5000;

export enum ApiRoute {
  Users = 'users',
}

export enum Namespace {
  App = 'APP',
  Data = 'DATA',
}

export const USERS_PER_PAGE = 30;
