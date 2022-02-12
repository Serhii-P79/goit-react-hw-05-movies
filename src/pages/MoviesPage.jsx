import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchMovie } from 'services';
import { SearchBTN, Movies, SearchForm } from './pages.styled';
import { Loader } from 'components';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchLine = searchParams.get('q');

  const location = useLocation();

  //console.log('location - MoviesPage - ', location);

  useEffect(() => {
    if (searchLine) {
      async function fetchMovies() {
        setLoading(true);
        try {
          const { results } = await getSearchMovie(searchLine);
          setMovies(results);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
      fetchMovies();
    }
  }, [searchLine]);

  //console.log(searchLine);

  const filmSearch = e => {
    e.preventDefault();
    // console.log('сабмит остановлен');
    // console.log(e.currentTarget.elements.search_line.value);
    const q = e.currentTarget.elements.search_line.value;
    setSearchParams({ q });
  };

  return (
    <main>
      <SearchForm action="" onSubmit={filmSearch}>
        <input type="text" name="search_line"></input>
        <SearchBTN type="submit">Search</SearchBTN>
      </SearchForm>
      {loading && <Loader />}
      {!error && movies && (
        <Movies>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </Movies>
      )}
    </main>
  );
};
