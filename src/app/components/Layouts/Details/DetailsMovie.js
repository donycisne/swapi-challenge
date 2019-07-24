import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../../globalStore/thunks/thunkMovie";

const DetailsMovie = ({ match, history }) => {
  const dispatch = useDispatch();

  const { id } = match.params;

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  const movie = useSelector(state => state.movie);
  const nameCharacters = useSelector(state => state.nameCharacters);
  const namePlanets = useSelector(state => state.namePlanets);
  const nameSpecies = useSelector(state => state.nameSpecies);
  const nameStarships = useSelector(state => state.nameStarships);
  const nameVehicles = useSelector(state => state.nameVehicles);

  const prevPage = () => {
    history.go(-1);
  };

  const characters = movie && (
    <ul>
      {movie.characters.map((character, index) => (
        <li key={character}>
          <Link
            to={`/personajes/${character.slice(
              character.indexOf("people") + "people".length + 1,
              character.length - 1
            )}`}
          >
            {nameCharacters[index]}
          </Link>
        </li>
      ))}
    </ul>
  );

  const planets = movie && (
    <ul>
      {movie.planets.map((planet, index) => (
        <li key={planet}>
          <Link
            to={`/planetas/${planet.slice(
              planet.indexOf("planets") + "planets".length + 1,
              planet.length - 1
            )}`}
          >
            {namePlanets[index]}
          </Link>
        </li>
      ))}
    </ul>
  );

  const starships = movie && (
    <ul>
      {movie.starships.map((starship, index) => (
        <li key={starship}>
          <Link
            to={`/naves/${starship.slice(
              starship.indexOf("starships") + "starships".length + 1,
              starship.length - 1
            )}`}
          >
            {nameStarships[index]}
          </Link>
        </li>
      ))}
    </ul>
  );

  const vehicles = movie && (
    <ul>
      {movie.vehicles.map((vehicle, index) => (
        <li key={vehicle}>
          <Link
            to={`/vehiculos/${vehicle.slice(
              vehicle.indexOf("vehicles") + "vehicles".length + 1,
              vehicle.length - 1
            )}`}
          >
            {nameVehicles[index]}
          </Link>
        </li>
      ))}
    </ul>
  );

  const species = movie && (
    <ul>
      {movie.species.map((specie, index) => (
        <li key={specie}>
          <Link
            to={`/especies/${specie.slice(
              specie.indexOf("species") + "species".length + 1,
              specie.length - 1
            )}`}
          >
            {nameSpecies[index]}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <button onClick={prevPage}>◀</button>

      {movie && movie ? (
        <div>
          <p>Title: {movie.title}</p>
          <p>Episode: {movie.episode_id}</p>
          <p>Opening Crawl: {movie.opening_crawl}</p>
          <p>Director: {movie.director}</p>
          <p>Producer: {movie.producer}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Characters:</p>
          {characters}
          <p>Planets:</p>
          {planets}
          <p>Starships:</p>
          {starships}
          <p>Vehicles:</p>
          {vehicles}
          <p>Species:</p>
          {species}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsMovie;
