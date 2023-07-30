import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps): JSX.Element {
  return (
    <div className="container">
      {children}
    </div>
  );
}
