import {
  getMoviesRequest,
  getMoviesSuccess,
  getMoviesFailure
} from "../actions/actionCreators";

export function getMovies() {
  return async dispatch => {
    dispatch(getMoviesRequest());

    try {
      const request = await fetch(`https://swapi.dev/api/films/`);
      const response = await request.json();
      const movies = response.results;

      dispatch(getMoviesSuccess(movies));
    } catch (error) {
      dispatch(getMoviesFailure(error));
    }
  };
}
