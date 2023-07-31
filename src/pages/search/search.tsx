import { Loading, Pagination, SearchForm, UserList } from '../../components';
import { getStatus, getUsers } from '../../store/app-data/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RequestStatus, SortingOrder } from '../../types';
import { useEffect, useState } from 'react';
import { fetchUserAction } from '../../store/api-actions';
import { resetUsers } from '../../store/app-data/app-data';


export function Search(): JSX.Element {
  const users = useAppSelector(getUsers);
  const status = useAppSelector(getStatus);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrenPage] = useState(1);
  const [sortingOrder, setSortingOrder] = useState<SortingOrder>(SortingOrder.Desc);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    dispatch(fetchUserAction({
      query: searchQuery,
      order: sortingOrder,
      page: currentPage
    }));
  }, [currentPage, dispatch, sortingOrder]);

  return (
    <section>
      <h2 className="section__title">Search users on GitHub</h2>

      <SearchForm
        params={{
          query: searchQuery,
          order: sortingOrder,
          page: currentPage
        }}
        onQueryChange={(query: string) => {
          setSearchQuery(query);
          dispatch(resetUsers());
        }}
        onOrderChange={setSortingOrder}
        onSubmit={() => {
          setCurrenPage(1);
          dispatch(fetchUserAction(
            {
              query: searchQuery,
              order: sortingOrder,
              page: currentPage
            }
          ));
        }}
      />

      <Pagination
        page={currentPage}
        onChange={setCurrenPage}
        disabled={searchQuery === ''}
      />
      {status === RequestStatus.Loading && <Loading/>}
      {status === RequestStatus.Idle && (
        <>

          <UserList users={users}/>

          <Pagination
            page={currentPage}
            onChange={setCurrenPage}
            disabled={searchQuery === ''}
          />
        </>
      )}
    </section>
  );
}

