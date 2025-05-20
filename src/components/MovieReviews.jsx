import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../api/tmdb';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews.length) return <p>No reviews available.</p>;

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p><strong>{review.author}:</strong> {review.content}</p>
        </li>
      ))}
    </ul>
  );
}
