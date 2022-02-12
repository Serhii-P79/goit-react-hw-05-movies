import { useParams } from 'react-router-dom';
import { Loader } from 'components';
import { useFetchMovieCast } from 'hooks';
import no_img from 'img/no_image.png';
import { CssCast } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const { movieCredits, loading, error } = useFetchMovieCast(movieId);

  // console.log('movieCredits - ', movieCredits);
  const { cast } = movieCredits;
  //  console.log(cast);

  return (
    <div>
      {loading && <Loader />}

      {!error && (
        <CssCast.Ul>
          {cast &&
            cast.map(({ cast_id, character, name, profile_path }) => {
              return (
                <li key={cast_id}>
                  <CssCast.Poster
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : no_img
                    }
                    alt={character}
                  />
                  <p> character - {character}</p> <p>name - {name}</p>
                </li>
              );
            })}
        </CssCast.Ul>
      )}
    </div>
  );
};
