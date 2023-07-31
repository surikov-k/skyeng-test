import { User } from '../../types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps): JSX.Element {
  return (
    <article className="user-card">
      <div className="user-card__avatar">
        <img
          className="user-card__img"
          src={user.avatar_url}
          width="64"
          height="64"
          alt="Avatar"
        />
      </div>
      <div className="user-card__info">
        <h3 className="user-card__title">{user.login}</h3>
        <Link
          className="link user-card__link"
          to={AppRoute.Details.replace(':id', `${user.id}`)}
        >Details
        </Link>
      </div>
    </article>
  );
}
