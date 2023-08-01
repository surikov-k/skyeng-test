import { User } from './user.intrerface';

export interface SearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
