import axios from "axios";

import {
  getMovieRequest,
  getMovieSuccess,
  getMovieFailure
} from "../actions/actionCreators";

export function getMovie(id) {
  return async dispatch => {
    dispatch(getMovieRequest());

    try {
      const request = await fetch(`https://swapi.dev/api/films/${id}/`);
      const response = await request.json();
      const movie = response;

      const promisesCharacters = movie.characters.map(async character => {
        const request = await axios.get(character);
        const response = request.data.name;
        return response;
      });
      const nameCharacters = await Promise.all(promisesCharacters);

      const promisesPlanets = movie.planets.map(async planet => {
        const request = await axios.get(planet);
        const response = request.data.name;
        return response;
      });
      const namePlanets = await Promise.all(promisesPlanets);

      const promisesSpecies = movie.species.map(async specie => {
        const request = await axios.get(specie);
        const response = request.data.name;
        return response;
      });
      const nameSpecies = await Promise.all(promisesSpecies);

      const promisesStarships = movie.starships.map(async starship => {
        const request = await axios.get(starship);
        const response = request.data.name;
        return response;
      });
      const nameStarships = await Promise.all(promisesStarships);

      const promisesVehicles = movie.vehicles.map(async vehicle => {
        const request = await axios.get(vehicle);
        const response = request.data.name;
        return response;
      });
      const nameVehicles = await Promise.all(promisesVehicles);

      dispatch(
        getMovieSuccess(
          movie,
          nameCharacters,
          namePlanets,
          nameSpecies,
          nameStarships,
          nameVehicles
        )
      );
    } catch (error) {
      dispatch(getMovieFailure(error));
    }
  };
}
