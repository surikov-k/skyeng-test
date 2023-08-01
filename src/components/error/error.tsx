import { useAppDispatch, useAppSelector } from '../../hooks';
import { getError } from '../../store/app-data/selectors';
import { Button } from '../button/button';
import { resetError } from '../../store/app-data/app-data';
import { useNavigate } from 'react-router-dom';


export function Error(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const message = useAppSelector(getError);

  return (
    <div className="error">
      <h2 className="error__title">Error</h2>
      <p className="error__message">{message}</p>
      <div>
        <Button
          text="OK"
          onClick={() => {
            dispatch(resetError());
            navigate(-1);
          }}
        />
      </div>
    </div>
  );
}
