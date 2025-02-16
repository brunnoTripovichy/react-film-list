import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './features/MovieList';
import NavBar from './features/NavBar';
import { tempMovieData, tempWatchedData } from './assets/data';
import AppLogo from './components/AppLogo';
import InputSearch from './components/InputSearch';
import SearchResults from './components/SearchResults';
import ListBox from './components/ListBox';
import Movie from './components/Movie';
import WatchedSummary from './features/WatchedSummary';
import WatchedList from './features/WatchedList';
import Loader from './components/Loader';

const App = () => {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=4663f48c&s=${searchTerm}`,
        );

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();

        if (data.Response === 'False') {
          throw new Error(data.Error);
        }

        setMovies(data.Search);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    if (searchTerm.trim() === '' || searchTerm.length < 3) {
      setMovies([]);
      setError('');
      return;
    }

    fetchMovies();
  }, [searchTerm]);

  return (
    <div>
      <NavBar>
        <AppLogo />
        <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SearchResults movies={movies} />
      </NavBar>
      <MovieList>
        <ListBox>
          {!isLoading &&
            !error &&
            movies?.map((movie, index) => (
              <ul className="list" key={index}>
                {<Movie movie={movie} />}
              </ul>
            ))}

          {isLoading && <Loader />}

          {error && <p>{error}</p>}
        </ListBox>
        <ListBox>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </ListBox>
      </MovieList>
    </div>
  );
};

export default App;
