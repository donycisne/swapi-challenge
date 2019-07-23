import {
  GET_CHARACTERS_REQUEST,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_CHARACTER_REQUEST,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_FAILURE,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
  GET_PLANET_REQUEST,
  GET_PLANET_SUCCESS,
  GET_PLANET_FAILURE,
  GET_SPECIE_REQUEST,
  GET_SPECIE_SUCCESS,
  GET_SPECIE_FAILURE,
  GET_STARSHIP_REQUEST,
  GET_STARSHIP_SUCCESS,
  GET_STARSHIP_FAILURE,
  GET_VEHICLE_REQUEST,
  GET_VEHICLE_SUCCESS,
  GET_VEHICLE_FAILURE
} from "./actionTypes";

/* =====================
------ CHARACTERS ------
=======================*/
export const getCharactersRequest = () => ({ type: GET_CHARACTERS_REQUEST });

export const getCharactersSuccess = characters => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: { characters }
});

export const getCharactersFailure = error => ({
  type: GET_CHARACTERS_FAILURE,
  payload: { error }
});

/* =====================
-------- MOVIES --------
=======================*/
export const getMoviesRequest = () => ({ type: GET_MOVIES_REQUEST });

export const getMoviesSuccess = movies => ({
  type: GET_MOVIES_SUCCESS,
  payload: { movies }
});

export const getMoviesFailure = error => ({
  type: GET_MOVIES_FAILURE,
  payload: { error }
});

/* =====================
------- CHARACTER ------
=======================*/
export const getCharacterRequest = () => ({ type: GET_CHARACTER_REQUEST });

export const getCharacterSuccess = (
  character,
  nameHomeWorld,
  nameMovies,
  nameSpecies,
  nameStarships,
  nameVehicles
) => ({
  type: GET_CHARACTER_SUCCESS,
  payload: {
    character,
    nameHomeWorld,
    nameMovies,
    nameSpecies,
    nameStarships,
    nameVehicles
  }
});

export const getCharacterFailure = error => ({
  type: GET_CHARACTER_FAILURE,
  payload: { error }
});

/* =====================
-------- MOVIE --------
=======================*/
export const getMovieRequest = () => ({ type: GET_MOVIE_REQUEST });

export const getMovieSuccess = (
  movie,
  nameCharacters,
  namePlanets,
  nameSpecies,
  nameStarships,
  nameVehicles
) => ({
  type: GET_MOVIE_SUCCESS,
  payload: {
    movie,
    nameCharacters,
    namePlanets,
    nameSpecies,
    nameStarships,
    nameVehicles
  }
});

export const getMovieFailure = error => ({
  type: GET_MOVIE_FAILURE,
  payload: { error }
});

/* =====================
-------- PLANET --------
=======================*/
export const getPlanetRequest = () => ({ type: GET_PLANET_REQUEST });

export const getPlanetSuccess = (planet, nameCharacters, nameMovies) => ({
  type: GET_PLANET_SUCCESS,
  payload: { planet, nameCharacters, nameMovies }
});

export const getPlanetFailure = error => ({
  type: GET_PLANET_FAILURE,
  payload: { error }
});

/* =====================
-------- SPECIE --------
=======================*/
export const getSpecieRequest = () => ({ type: GET_SPECIE_REQUEST });

export const getSpecieSuccess = (
  specie,
  nameCharacters,
  nameMovies,
  nameHomeWorld
) => ({
  type: GET_SPECIE_SUCCESS,
  payload: { specie, nameCharacters, nameMovies, nameHomeWorld }
});

export const getSpecieFailure = error => ({
  type: GET_SPECIE_FAILURE,
  payload: { error }
});

/* =====================
-------- STARSHIP --------
=======================*/
export const getStarshipRequest = () => ({ type: GET_STARSHIP_REQUEST });

export const getStarshipSuccess = (starship, nameCharacters, nameMovies) => ({
  type: GET_STARSHIP_SUCCESS,
  payload: { starship, nameCharacters, nameMovies }
});

export const getStarshipFailure = error => ({
  type: GET_STARSHIP_FAILURE,
  payload: { error }
});

/* =====================
-------- VEHICLE --------
=======================*/
export const getVehicleRequest = () => ({ type: GET_VEHICLE_REQUEST });

export const getVehicleSuccess = (vehicle, nameCharacters, nameMovies) => ({
  type: GET_VEHICLE_SUCCESS,
  payload: { vehicle, nameCharacters, nameMovies }
});

export const getVehicleFailure = error => ({
  type: GET_VEHICLE_FAILURE,
  payload: { error }
});
