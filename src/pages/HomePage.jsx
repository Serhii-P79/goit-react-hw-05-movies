// import styled from 'styled-components';
// import { Outlet, NavLink } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { GlobalStyle } from 'components';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from 'components';
import { useFetchMovies } from 'hooks';
import { Movies } from './pages.styled';

export const HomePage = () => {
  const { movies, loading, error } = useFetchMovies();

  const location = useLocation();

  //console.log('location - HomePage - ', location);

  //console.log(movies);

  return (
    <main>
      <h1>Trending today</h1>
      {loading && <Loader />}

      {!error && (
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
