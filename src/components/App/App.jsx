import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
//import { Layout, Cast, Reviews } from 'components';
//import { HomePage, MovieDetailsPage, MoviesPage } from 'pages';

const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage').then(module => ({
    default: module.MoviesPage,
  }))
);

const HomePage = lazy(() =>
  import('../../pages/HomePage').then(module => ({
    default: module.HomePage,
  }))
);

const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage').then(module => ({
    default: module.MovieDetailsPage,
  }))
);

const Cast = lazy(() =>
  import('../Cast/Cast').then(module => ({
    default: module.Cast,
  }))
);

const Layout = lazy(() =>
  import('../Layout/Layout').then(module => ({
    default: module.Layout,
  }))
);

const Reviews = lazy(() =>
  import('../Reviews/Reviews').then(module => ({
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     textTransform: 'uppercase',
    //     color: '#010101',
    //   }}
    // >
    //   React homework template
    // </div>
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
