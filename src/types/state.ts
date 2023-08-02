import { User } from './user.intrerface';
import { store } from '../store';
import { RequestStatus } from './request-status.enum';
import { UserDetails } from './user-details.interface';

export type AppData = {
  users: User[];
  details: UserDetails | null;
  total: number;
  incompleteResults: boolean;
  status: RequestStatus;
  error: string;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
