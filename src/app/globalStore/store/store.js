import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../reducers/reducer";

export const initialState = {
  characters: null,
  movies: null,
  isLoading: false,
  error: null,
  movie: null,
  character: null,
  planet: null,
  specie: null,
  starship: null,
  vehicle: null,
  nameMovies: null,
  nameCharacters: null,
  namePlanets: null,
  nameSpecies: null,
  nameStarships: null,
  nameVehicles: null,
  nameHomeWorld: null
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
