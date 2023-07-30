import { User } from '../../types';
import { UserCard } from '../user-card/user-card';

interface UserListProps {
  users: User[];
}

export function UserList({users}: UserListProps):JSX.Element {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-list__item">
          <UserCard user={user}/>
        </li>
      ))}
    </ul>
  );
}
