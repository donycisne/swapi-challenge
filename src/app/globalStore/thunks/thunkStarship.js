import axios from "axios";

import {
  getStarshipRequest,
  getStarshipSuccess,
  getStarshipFailure
} from "../actions/actionCreators";

export function getStarship(id) {
  return async dispatch => {
    dispatch(getStarshipRequest());

    try {
      const request = await fetch(`https://swapi.dev/api/starships/${id}/`);
      const response = await request.json();
      const starship = response;

      const promisesCharacters = starship.pilots.map(async character => {
        const request = await axios.get(character);
        const response = request.data.name;
        return response;
      });
      const nameCharacters = await Promise.all(promisesCharacters);

      const promisesMovies = starship.films.map(async film => {
        const request = await axios.get(film);
        const response = request.data.title;
        return response;
      });
      const nameMovies = await Promise.all(promisesMovies);

      dispatch(getStarshipSuccess(starship, nameCharacters, nameMovies));
    } catch (error) {
      dispatch(getStarshipFailure(error));
    }
  };
}
