import axios from "axios";

import {
  getCharacterRequest,
  getCharacterSuccess,
  getCharacterFailure
} from "../actions/actionCreators";

export function getCharacter(id) {
  return async dispatch => {
    dispatch(getCharacterRequest());

    try {
      const request = await fetch(`https://swapi.dev/api/people/${id}/`);
      const response = await request.json();
      const character = response;

      const reqHomeWorld = await fetch(character.homeworld);
      const resHomeWorld = await reqHomeWorld.json();
      const nameHomeWorld = resHomeWorld;

      const promisesMovies = character.films.map(async film => {
        const request = await axios.get(film);
        const response = request.data.title;
        return response;
      });
      const nameMovies = await Promise.all(promisesMovies);

      const promisesSpecies = character.species.map(async specie => {
        const request = await axios.get(specie);
        const response = request.data.name;
        return response;
      });
      const nameSpecies = await Promise.all(promisesSpecies);

      const promisesStarships = character.starships.map(async starship => {
        const request = await axios.get(starship);
        const response = request.data.name;
        return response;
      });
      const nameStarships = await Promise.all(promisesStarships);

      const promisesVehicles = character.vehicles.map(async vehicle => {
        const request = await axios.get(vehicle);
        const response = request.data.name;
        return response;
      });
      const nameVehicles = await Promise.all(promisesVehicles);

      dispatch(
        getCharacterSuccess(
          character,
          nameHomeWorld,
          nameMovies,
          nameSpecies,
          nameStarships,
          nameVehicles
        )
      );
    } catch (error) {
      dispatch(getCharacterFailure(error));
    }
  };
}
