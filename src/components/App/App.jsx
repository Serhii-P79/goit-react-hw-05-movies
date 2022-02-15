import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components';
//import { Layout, Cast, Reviews } from 'components';
//import { HomePage, MovieDetailsPage, MoviesPage } from 'pages';

const сreateChankPage = pageName => {
  return lazy(() =>
    import(`../../pages/${pageName}.jsx`).then(module => ({
      default: module[pageName],
    }))
  );
};
const сreateChankComponent = componentName => {
  return lazy(() =>
    import(`../${componentName}/${componentName}.jsx`).then(module => ({
      default: module[componentName],
    }))
  );
};

const MoviesPage = сreateChankPage('MoviesPage');
const HomePage = сreateChankPage('HomePage');
const MovieDetailsPage = сreateChankPage('MovieDetailsPage');
const Cast = сreateChankComponent('Cast');
const Reviews = сreateChankComponent('Reviews');

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
