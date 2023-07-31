import { Paginator, RequestStatus, State, User } from '../../types';
import { Namespace, USERS_PER_PAGE } from '../../constants';

export const getUsers = (state: State): User[] => state[Namespace.Data].users;

export const getStatus = (state: State): RequestStatus => state[Namespace.Data].status;

export const getCurrentPage = (state: State): number => state[Namespace.Data].currentPage;

export const getCurrentPagination = (state: State): Paginator => ({
  current: state[Namespace.Data].currentPage,
  total: Math.ceil(state[Namespace.Data].total / USERS_PER_PAGE)
});

