import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchUser } from '../../store/api-actions';
import { getStatus, getUserDetails } from '../../store/app-data/selectors';
import { RequestStatus } from '../../types';
import { DetailsItem, Error, Loading } from '../../components';
import { Button } from '../../components/button/button';

export function Details(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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

  const titles: Record<string, string> = {
    bio: 'Bio',
    company: 'Company',
    createdAt: 'Created At',
    email: 'email',
    followers: 'Followers',
    following: 'Following',
    location: 'Location',
    publicRepos: 'Public Repos',
  };

  return (
    <section className="details">
      {status === RequestStatus.Idle && (
        <>
          <p>
            <Button
              text="Go Back"
              onClick={() => navigate(-1)}
            />
          </p>
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
              }).map(([key, value]) => !!value &&
                <DetailsItem
                  key={key}
                  title={titles[key]}
                  info={(value).toString()}
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
          <p>
            <Button
              text="Go Back"
              onClick={() => navigate(-1)}
            />
          </p>
        </>
      )}
    </section>
  );
}
