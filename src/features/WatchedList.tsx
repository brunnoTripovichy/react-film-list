import type React from 'react';
import type { Movie } from '../assets/data';
import WatchedMovie from './WatchedMovie';

export interface WatchedListProps {
  watched: Movie[];
}

const WatchedList: React.FC<WatchedListProps> = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <WatchedMovie movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default WatchedList;
