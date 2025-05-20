import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../api/tmdb';
import MovieList from '../components/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMovies()
      .then(setMovies)
      .catch(setError);
  }, []);

  return (
    <>
      <h1>Trending Movies</h1>
      {error && <p>{error.message}</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
