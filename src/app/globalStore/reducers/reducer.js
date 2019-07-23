import { initialState } from "../store/store";

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
} from "../actions/actionTypes";

export function reducer(state = initialState, action) {
  switch (action.type) {
    /* =====================
    ------ CHARACTERS ------
    =======================*/
    case GET_CHARACTERS_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_CHARACTERS_SUCCESS: {
      const { characters } = action.payload;

      return {
        ...state,
        characters,
        isLoading: false
      };
    }

    case GET_CHARACTERS_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false
      };
    }

    /* =====================
    -------- MOVIES --------
    =======================*/
    case GET_MOVIES_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_MOVIES_SUCCESS: {
      const { movies } = action.payload;

      return {
        ...state,
        movies,
        isLoading: false
      };
    }

    case GET_MOVIES_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false
      };
    }

    /* =====================
    ------ CHARACTER -------
    =======================*/
    case GET_CHARACTER_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_CHARACTER_SUCCESS: {
      const {
        character,
        nameHomeWorld,
        nameMovies,
        nameSpecies,
        nameStarships,
        nameVehicles
      } = action.payload;

      return {
        ...state,
        character,
        nameHomeWorld,
        nameMovies,
        nameSpecies,
        nameStarships,
        nameVehicles,
        isLoading: false
      };
    }

    case GET_CHARACTER_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false
      };
    }

    /* =====================
    -------- MOVIE --------
    =======================*/
    case GET_MOVIE_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_MOVIE_SUCCESS: {
      const {
        movie,
        nameCharacters,
        namePlanets,
        nameSpecies,
        nameStarships,
        nameVehicles
      } = action.payload;

      return {
        ...state,
        movie,
        nameCharacters,
        namePlanets,
        nameSpecies,
        nameStarships,
        nameVehicles,
        isLoading: false
      };
    }

    case GET_MOVIE_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false
      };
    }

    /* =====================
    -------- PLANET --------
    =======================*/
    case GET_PLANET_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_PLANET_SUCCESS: {
      const { planet, nameCharacters, nameMovies } = action.payload;

      return {
        ...state,
        planet,
        nameCharacters,
        nameMovies,
        isLoading: false
      };
    }

    case GET_PLANET_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false
      };
    }

    /* =====================
    -------- SPECIE --------
    =======================*/
    case GET_SPECIE_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_SPECIE_SUCCESS: {
      const {
        specie,
        nameCharacters,
        nameMovies,
        nameHomeWorld
      } = action.payload;

      return {
        ...state,
        specie,
        nameCharacters,
        nameMovies,
        nameHomeWorld,
        isLoading: false
      };
    }

    case GET_SPECIE_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false
      };
    }
    /* =====================
    ------- STARSHIP -------
    =======================*/
    case GET_STARSHIP_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_STARSHIP_SUCCESS: {
      const { starship, nameCharacters, nameMovies } = action.payload;

      return {
        ...state,
        starship,
        nameCharacters,
        nameMovies,
        isLoading: false
      };
    }

    case GET_STARSHIP_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false
      };
    }

    /* =====================
    ------- VEHICLE --------
    =======================*/
    case GET_VEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_VEHICLE_SUCCESS: {
      const { vehicle, nameCharacters, nameMovies } = action.payload;

      return {
        ...state,
        vehicle,
        nameCharacters,
        nameMovies,
        isLoading: false
      };
    }

    case GET_VEHICLE_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false
      };
    }

    default: {
      return state;
    }
  }
}
