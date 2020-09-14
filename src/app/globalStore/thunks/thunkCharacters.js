import {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersFailure
} from "../actions/actionCreators";

export function getCharacters() {
  return async dispatch => {
    dispatch(getCharactersRequest());

    try {
      const request = await fetch(`https://swapi.dev/api/people/`);
      const response = await request.json();
      const characters = response.results;

      dispatch(getCharactersSuccess(characters));
    } catch (error) {
      dispatch(getCharactersFailure(error));
    }
  };
}
