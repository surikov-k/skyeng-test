import { Route, Routes } from 'react-router-dom';
import { Details, NotFound, Search } from '../../pages';
import { AppRoute } from '../../constants';
import { Main } from '../main/main';

export function App(): JSX.Element {
  return (
    <Main>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Search/>}
        />
        <Route
          path={AppRoute.Details}
          element={<Details/>}
        />
        <Route
          path="*"
          element={<NotFound/>}
        />
      </Routes>
    </Main>
  );
}

