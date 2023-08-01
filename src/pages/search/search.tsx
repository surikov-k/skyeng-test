import { Error, Loading, Pagination, SearchForm, UserList } from '../../components';
import { getStatus, getUsers } from '../../store/app-data/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RequestStatus, SortingOrder } from '../../types';
import { useEffect, useState } from 'react';
import { searchUsers } from '../../store/api-actions';
import { useSearchParams } from 'react-router-dom';
import { resetUsers } from '../../store/app-data/app-data';


export function Search(): JSX.Element {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getUsers);
  const status = useAppSelector(getStatus);
  const [queryParams, setQueryParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrenPage] = useState(1);
  const [sortingOrder, setSortingOrder] = useState<SortingOrder>(SortingOrder.Desc);


  const handleSearch = () => {
    setQueryParams(new URLSearchParams({
      query: searchQuery,
      order: sortingOrder,
      page: currentPage
    } as unknown as Record<string, string>));

    dispatch(searchUsers(
      {
        query: searchQuery,
        order: sortingOrder,
        page: currentPage
      }
    ));
  };

  const handleQueryChange = (query: string) => {
    setCurrenPage(1);
    dispatch(resetUsers());
    setSearchQuery(query);
  };


  useEffect(() => {
    setSearchQuery(queryParams.get('query') || '');

    const page = queryParams.get('page');
    if (page) {
      setCurrenPage(parseInt(page, 10));
    }

    setSortingOrder((queryParams.get('order') || SortingOrder.Desc) as SortingOrder);
  }, []);

  useEffect(() => {
    setQueryParams(new URLSearchParams({
      query: searchQuery,
      order: sortingOrder,
      page: currentPage
    } as unknown as Record<string, string>));

    if (!searchQuery) {
      return;
    }

    dispatch(searchUsers(
      {
        query: searchQuery,
        order: sortingOrder,
        page: currentPage
      }
    ));
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
        onQueryChange={handleQueryChange}
        onOrderChange={setSortingOrder}
        onSubmit={handleSearch}
      />

      <Pagination
        page={currentPage}
        onChange={setCurrenPage}
      />

      {status === RequestStatus.Loading && <Loading/>}
      {status === RequestStatus.Error && <Error/>}
      {status === RequestStatus.Idle && (
        <>
          <UserList users={users}/>

          <Pagination
            page={currentPage}
            onChange={setCurrenPage}
          />
        </>
      )}
    </section>
  );
}

