import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { fetchMovieDetails } from '../api/tmdb';
import styles from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/movies');

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
        <Link to={backLink.current}>Go back</Link>
        <div className={styles.info}>
            <h1 className={styles.title}>{movie.title}</h1>
            <p className={styles.overview}>{movie.overview}</p>
        </div>
        <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

        <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="reviews">Reviews</Link></li>
        </ul>

        <Outlet />
    </div>
  );
}
