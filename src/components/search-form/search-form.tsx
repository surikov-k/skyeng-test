import { useState } from 'react';
import { ApiResponse, User } from '../../types';

interface SearchFormProps {
  setUsers: (users: User[]) => void;
}

export function SearchForm({ setUsers }: SearchFormProps): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = async (): Promise<void> => {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${searchQuery}`);
      const data = await response.json() as ApiResponse;
      setUsers(data.items || []);
    } catch (error) {
      // console.error(error);
    }
  };

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
          handleSearch();
        }}
      >Search
      </button>
    </div>
  );
}
