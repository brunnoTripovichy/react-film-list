import type React from 'react';
import type { Movie } from '../assets/data';

export interface SearchResultsProps {
  movies: Movie[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
};

export default SearchResults;
