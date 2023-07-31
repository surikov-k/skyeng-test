import { User } from './user.intrerface';

export interface ApiResponse {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
