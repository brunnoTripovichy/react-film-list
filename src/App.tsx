import { useState } from 'react';
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

const App = () => {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <div>
      <NavBar>
        <AppLogo />
        <InputSearch />
        <SearchResults movies={movies} />
      </NavBar>
      <MovieList>
        <ListBox>
          {movies?.map((movie, index) => (
            <ul className="list" key={index}>
              {<Movie movie={movie} />}
            </ul>
          ))}
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
