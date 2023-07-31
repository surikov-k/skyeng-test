import { ChangeEvent } from 'react';
import { SearchQueryParams, SortingOrder } from '../../types';
import { Sorting } from '../sorting/sorting';
import { Button } from '../button/button';

interface SearchFormProps {
  params: SearchQueryParams;
  onQueryChange: (query: string) => void;
  onOrderChange: (order: SortingOrder) => void;
  onSubmit: () => void;
}

export function SearchForm({ params, onQueryChange, onOrderChange, onSubmit }: SearchFormProps): JSX.Element {


  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.target.value);
  };

  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        value={params.query}
        onChange={handleQueryChange}
        placeholder="Enter a query string"
      />
      <Sorting
        order={params.order}
        onChange={onOrderChange}
      />
      <Button
        text="Search"
        onClick={onSubmit}
        disabled={params.query === ''}
      />
    </div>
  );
}
