import axios from "axios";

import {
  getVehicleRequest,
  getVehicleSuccess,
  getVehicleFailure
} from "../actions/actionCreators";

export function getVehicle(id) {
  return async dispatch => {
    dispatch(getVehicleRequest());

    try {
      const request = await fetch(`https://swapi.dev/api/vehicles/${id}/`);
      const response = await request.json();
      const vehicle = response;

      const promisesCharacters = vehicle.pilots.map(async pilot => {
        const request = await axios.get(pilot);
        const response = request.data.name;
        return response;
      });
      const nameCharacters = await Promise.all(promisesCharacters);

      const promisesMovies = vehicle.films.map(async film => {
        const request = await axios.get(film);
        const response = request.data.title;
        console.log(response);
        return response;
      });
      const nameMovies = await Promise.all(promisesMovies);

      dispatch(getVehicleSuccess(vehicle, nameCharacters, nameMovies));
    } catch (error) {
      dispatch(getVehicleFailure(error));
    }
  };
}
