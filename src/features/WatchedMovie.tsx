import type React from 'react';
import type { Movie } from '../assets/data';

export interface WatchedMovieProps {
  movie: Movie;
}

const WatchedMovie: React.FC<WatchedMovieProps> = ({ movie }) => {
  return (
    <div>
      <p>
        <span>⭐️</span>
        <span>{movie.imdbRating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{movie.userRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{movie.runtime} min</span>
      </p>
    </div>
  );
};

export default WatchedMovie;
