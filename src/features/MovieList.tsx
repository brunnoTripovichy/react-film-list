import type React from 'react';
import type { ReactNode } from 'react';

export interface MovieListProps {
  children: ReactNode;
}

const MovieList: React.FC<MovieListProps> = ({ children }) => {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
};
export default MovieList;
