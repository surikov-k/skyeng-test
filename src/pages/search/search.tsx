import { useState } from 'react';
import { User } from '../../types';
import { SearchForm, UserList } from '../../components';


export function Search(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <section>
      <h2 className="section__title">Search users on GitHub</h2>
      <SearchForm setUsers={setUsers}/>
      <UserList users={users}/>
    </section>
  );
}
