import { User } from '../../types';

interface UserCardProps {
  user: User;
}

export function UserCard({user}: UserCardProps): JSX.Element {
  return (
    <article className="user-card">
      <img
        src={user.avatar_url}
        width="64"
        height="64"
        alt="Avatar"
      />
      <h3>{user.login}</h3>
      <a href="#">Details</a>
    </article>
  );
}
