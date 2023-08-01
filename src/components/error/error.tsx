import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useAppSelector } from '../../hooks';
import { getError } from '../../store/app-data/selectors';


export function Error(): JSX.Element {
  const message = useAppSelector(getError);

  return (
    <div className="error">
      <h2 className="error__title">Error</h2>
      <p className="error__message">{message}</p>
      <Link
        className="link"
        to={AppRoute.Root}
      >Back Home
      </Link>
    </div>
  );
}
