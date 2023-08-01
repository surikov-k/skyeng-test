import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchUser } from '../../store/api-actions';
import { getStatus, getUserDetails } from '../../store/app-data/selectors';
import { RequestStatus } from '../../types';
import { DetailsItem, Error, Loading } from '../../components';

export function Details(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const { login } = useParams();
  const status = useAppSelector(getStatus);
  const details = useAppSelector(getUserDetails);

  useEffect(() => {
    if (login) {
      dispatch(fetchUser(login));
    }
  }, [dispatch, login]);

  if (!details) {
    if (status === RequestStatus.Loading) {
      return <Loading/>;
    }
    if (status === RequestStatus.Error) {
      return <Error/>;
    }
    return null;
  }

  const {
    avatar,
    bio,
    company,
    createdAt,
    email,
    followers,
    following,
    location,
    name,
    publicRepos,
    url,
  } = details;

  return (
    <section className="details">
      {status === RequestStatus.Idle && (
        <>
          <h2>Details page for {login}</h2>
          <img
            className="details__img"
            src={avatar}
            alt="avatar"
          />
          <div className="details__info">
            {name && <h2 className="details__name">{name}</h2>}

            {
              Object.entries({
                bio,
                company,
                createdAt,
                email,
                followers,
                following,
                location,
                publicRepos,
              }).map(([title, info]) => !!info &&
                <DetailsItem
                  key={title}
                  title={title}
                  info={(info).toString()}
                />
              )
            }
          </div>

          {url && (
            <div>
              github:&nbsp;
              <a
                className="link"
                href={url}
              >
                {login}
              </a>
            </div>
          )}
        </>
      )}
    </section>
  );
}
