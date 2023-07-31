import { SortingOrder } from './sorting-order.enum';
import { SearchSorting } from './search-sorting.enum';

export interface SearchQueryParams {
  order: SortingOrder;
  page: number;
  sort?: SearchSorting;
  query: string;
}
