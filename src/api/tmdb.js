import axios from 'axios';

const API_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzRjY2ZhNWNkNjk2MDkwZGI4MDliNzc0NzAzODA0NiIsIm5iZiI6MTYxODU4OTY2MS40ODcsInN1YiI6IjYwNzliN2RkZmI4MzQ2MDAyYTVhYTIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HVRHOBymJKWj4jl2Qy1e_Ecian6_sxihkTqcTdYzCt4';
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization: API_TOKEN,
  },
};

export const fetchTrendingMovies = () =>
  axios.get(`${BASE_URL}/trending/movie/day`, options).then(res => res.data.results);

export const searchMovies = query =>
  axios.get(`${BASE_URL}/search/movie?query=${query}`, options).then(res => res.data.results);

export const fetchMovieDetails = id =>
  axios.get(`${BASE_URL}/movie/${id}`, options).then(res => res.data);

export const fetchMovieCredits = id =>
  axios.get(`${BASE_URL}/movie/${id}/credits`, options).then(res => res.data.cast);

export const fetchMovieReviews = id =>
  axios.get(`${BASE_URL}/movie/${id}/reviews`, options).then(res => res.data.results);
