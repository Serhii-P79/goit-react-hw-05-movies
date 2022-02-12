import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=0ba81670c9cf6e5d09ab4fdfcce59e32

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const api_key = '0ba81670c9cf6e5d09ab4fdfcce59e32';

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
export const getTrending = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${api_key}`);
  return response.data;
};

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=bnvbnvbnvbn&page=1&include_adult=false
export const getSearchMovie = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};

// https://api.themoviedb.org/3/movie/15?api_key=<<api_key>>&language=en-US
export const getMovieDetailsById = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${api_key}&language=en-US`
  );
  return response.data;
};

// https://api.themoviedb.org/3/movie/15/credits?api_key=<<api_key>>&language=en-US
export const getMovieCredits = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${api_key}&language=en-US`
  );
  return response.data;
};

// https://api.themoviedb.org/3/movie/15/reviews?api_key=<<api_key>>&language=en-US&page=1
export const getMovieReviews = async id => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${api_key}&language=en-US&page=1`
  );
  return response.data;
};
