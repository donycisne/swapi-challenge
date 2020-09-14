import axios from "axios";

import {
  getPlanetRequest,
  getPlanetSuccess,
  getPlanetFailure
} from "../actions/actionCreators";

export function getPlanet(id) {
  return async dispatch => {
    dispatch(getPlanetRequest());

    try {
      const request = await fetch(`https://swapi.dev/api/planets/${id}/`);
      const response = await request.json();
      const planet = response;

      const promisesCharacters = planet.residents.map(async resident => {
        const request = await axios.get(resident);
        const response = request.data.name;
        return response;
      });
      const nameCharacters = await Promise.all(promisesCharacters);

      const promisesMovies = planet.films.map(async film => {
        const request = await axios.get(film);
        const response = request.data.title;
        return response;
      });
      const nameMovies = await Promise.all(promisesMovies);

      dispatch(getPlanetSuccess(planet, nameCharacters, nameMovies));
    } catch (error) {
      dispatch(getPlanetFailure(error));
    }
  };
}
