import { ChangeEvent, KeyboardEvent, useRef } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputRef?.current?.value) {
      onSubmit();
    }
  };

  return (
    <div className="search-form">
      <input
        ref={inputRef}
        className="search-form__input"
        type="text"
        value={params.query}
        onChange={handleQueryChange}
        onKeyDown={handleKeyDown}
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
