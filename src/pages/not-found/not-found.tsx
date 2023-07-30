import { AppRoute } from '../../constants';
import { Link } from 'react-router-dom';

export function NotFound(): JSX.Element {
  return (
    <section className="not-found">
      <p>Page not found</p>
      <Link className="link not-found__link" to={AppRoute.Root}>Home</Link>
    </section>
  );
}
