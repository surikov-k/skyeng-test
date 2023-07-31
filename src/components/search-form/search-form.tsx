import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchUserAction } from '../../store/api-actions';

export function SearchForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState<string>('');


  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Enter a query string"
      />
      <button
        className="button search-form__button"
        onClick={() => {
          dispatch(fetchUserAction(searchQuery));
        }}
      >Search
      </button>
    </div>
  );
}
