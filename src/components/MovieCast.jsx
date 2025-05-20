import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../api/tmdb';
import styles from './MovieCast.module.css';

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCast);
  }, [movieId]);

  if (!cast.length) return <p>No cast information available.</p>;

  return (
<ul className={styles.castList}>
  {cast.map(actor => (
    <li key={actor.id} className={styles.actorCard}>
      <img
        className={styles.actorPhoto}
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
            : 'https://via.placeholder.com/100x150?text=No+Photo'
        }
        alt={actor.name}
      />
      <p className={styles.actorName}>{actor.name}</p>
    </li>
  ))}
</ul>
  );
}
