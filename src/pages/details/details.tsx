import { useParams } from 'react-router-dom';

export function Details(): JSX.Element {
  const { login } = useParams();
  return (
    <p>Details page for {login}</p>
  );
}
