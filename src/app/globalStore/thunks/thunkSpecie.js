import axios from "axios";

import {
  getSpecieRequest,
  getSpecieSuccess,
  getSpecieFailure
} from "../actions/actionCreators";

export function getSpecie(id) {
  return async dispatch => {
    dispatch(getSpecieRequest());

    try {
      const request = await fetch(`https://swapi.dev/api/species/${id}/`);
      const response = await request.json();
      const specie = response;

      const reqHomeWorld = await fetch(specie.homeworld);
      const resHomeWorld = await reqHomeWorld.json();
      const nameHomeWorld = resHomeWorld;

      const promisesCharacters = specie.people.map(async character => {
        const request = await axios.get(character);
        const response = request.data.name;
        return response;
      });
      const nameCharacters = await Promise.all(promisesCharacters);

      const promisesMovies = specie.films.map(async film => {
        const request = await axios.get(film);
        const response = request.data.title;
        return response;
      });
      const nameMovies = await Promise.all(promisesMovies);

      dispatch(
        getSpecieSuccess(specie, nameCharacters, nameMovies, nameHomeWorld)
      );
    } catch (error) {
      dispatch(getSpecieFailure(error));
    }
  };
}
