import { useParams } from 'react-router-dom';
import { useFetchMovieReviews } from 'hooks';
import { Loader } from 'components';
import { Rewiews } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const { movieReviews, loading, error } = useFetchMovieReviews(movieId);

  // console.log(movieReviews);
  const reviews = movieReviews.results;

  return (
    <div>
      {loading && <Loader />}

      {!error && (
        <Rewiews>
          {reviews && reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <h3>{author}</h3>
                  <p>{content}</p>
                </li>
              );
            })
          ) : (
            <div> not reviews </div>
          )}
        </Rewiews>
      )}
    </div>
  );
};
