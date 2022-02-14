import { useEffect, useState } from 'react';
import {
  getTrending,
  getMovieDetailsById,
  getMovieCredits,
  getMovieReviews,
} from 'services';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const { results } = await getTrending();
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export const useFetchMovieDetails = id => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieId() {
      setLoading(true);
      try {
        const results = await getMovieDetailsById(id);
     //   console.log(results);
        setMovie(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieId();
  }, [id]);

  return { movie, loading, error };
};

export const useFetchMovieCast = id => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieId() {
      setLoading(true);
      try {
        const results = await getMovieCredits(id);
   //     console.log(results);
        setMovieCredits(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieId();
  }, [id]);

  return { movieCredits, loading, error };
};

export const useFetchMovieReviews = id => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieId() {
      setLoading(true);
      try {
        const results = await getMovieReviews(id);
   //     console.log(results);
        setMovieReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieId();
  }, [id]);

  return { movieReviews, loading, error };
};
