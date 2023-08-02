import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Link
        className="link"
        to={AppRoute.Me}
      >&copy;
      </Link>
      &nbsp;Contact me:&nbsp;
      <a
        className="link"
        href="https://t.me/k_surikov"
      >Konstantin Surikov
      </a>
    </footer>
  );
}
