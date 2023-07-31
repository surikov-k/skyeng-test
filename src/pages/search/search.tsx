import { Loading, SearchForm, UserList } from '../../components';
import { getStatus, getUsers } from '../../store/app-data/selectors';
import { useAppSelector } from '../../hooks';
import { RequestStatus } from '../../types';


export function Search(): JSX.Element {
  const users = useAppSelector(getUsers);
  const status = useAppSelector(getStatus);

  return (
    <section>
      <h2 className="section__title">Search users on GitHub</h2>
      <SearchForm/>
      {status === RequestStatus.Loading && <Loading/>}
      {status === RequestStatus.Idle && <UserList users={users}/>}
    </section>
  );
}
