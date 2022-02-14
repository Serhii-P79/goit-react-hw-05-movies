//import styled from 'styled-components';
import { Suspense } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { Loader } from 'components';
import { useNavigate, useLocation } from 'react-router-dom';
//import { useEffect } from 'react';
// import { getMovieDetailsById } from 'services';
import { useFetchMovieDetails } from 'hooks';
import { useState } from 'react';
import no_img from 'img/no_image.png';
import {
  GoToBack,
  DetailsPage,
  Description,
  AdditionalInformation,
} from './pages.styled';

// const Link = styled(NavLink)`
//   &.active {
//     color: tomato;
//   }
// `;

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movie, loading, error } = useFetchMovieDetails(movieId);
  // const [from, setFrom] = useState('null');

  const navigate = useNavigate();
  const location = useLocation();

  // const fromL =
  //   location.state?.from?.pathname + location.state?.from?.search || '/';
  // console.log(location);

  const [from] = useState(
    location.state?.from?.pathname + location.state?.from?.search || '/'
  );

  // useEffect(() => {
  //   setFrom(fromL);
  //   //// eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [fromL]);
  //console.log(movieId);

  // console.log(navigate);
  // console.log('location - ', location);

  //const from = location.state?.from?.pathname + location.state?.from?.search;

  //console.log('from - ', from);

  //console.log(movie);

  const { poster_path, original_title, overview, genres, vote_average } = movie;

  const genresStr =
    genres &&
    genres
      .map(({ name }) => {
        return name;
      })
      .join(', ');

  // onClick={() => navigate(-1)}

  return (
    <main>
      <GoToBack type="button" onClick={() => navigate(from)}>
        Go to back
      </GoToBack>

      {loading && <Loader />}
      {!error && !loading && (
        <>
          <DetailsPage>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : no_img
              }
              alt={original_title}
            />
            <Description>
              <h3>{original_title}</h3>
              <span>User Score: </span>
              <span>{Number(vote_average) * 10}%</span>
              <h4>Overview</h4>
              <p>{overview}</p>
              <h4>Genres</h4>
              <p>{genresStr}</p>
            </Description>
          </DetailsPage>
          <AdditionalInformation>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>reviews</Link>
              </li>
            </ul>
          </AdditionalInformation>
          <Suspense fallback="">
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};
