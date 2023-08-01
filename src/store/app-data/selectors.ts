import { Paginator, RequestStatus, State, User, UserDetails } from '../../types';
import { Namespace, USERS_PER_PAGE } from '../../constants';

export const getUsers = (state: State): User[] => state[Namespace.Data].users;

export const getStatus = (state: State): RequestStatus => state[Namespace.Data].status;

export const getCurrentPage = (state: State): number => state[Namespace.Data].currentPage;

export const getError = (state: State): string => state[Namespace.Data].error;

export const getCurrentPagination = (state: State): Paginator => ({
  current: state[Namespace.Data].currentPage,
  total: Math.ceil(state[Namespace.Data].total / USERS_PER_PAGE)
});

export const getUserDetails = (state: State): UserDetails | null => state[Namespace.Data].details;


