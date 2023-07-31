import { User } from './user.intrerface';
import { store } from '../store';
import { RequestStatus } from './request-status.enum';

export type AppData = {
  users: User[];
  total: number;
  incompleteResults: boolean;
  status: RequestStatus;
  currentPage: number;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
