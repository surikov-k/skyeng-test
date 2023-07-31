import { RequestStatus, State, User } from '../../types';
import { Namespace } from '../../constants';

export const getUsers = (state: State): User[] => state[Namespace.Data].users;
export const getStatus = (state: State): RequestStatus => state[Namespace.Data].status;
