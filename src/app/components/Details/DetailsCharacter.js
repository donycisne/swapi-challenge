import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../globalStore/thunks/thunkCharacter";

const DetailsCharacter = ({ match, history }) => {
  const dispatch = useDispatch();

  const { id } = match.params;

  useEffect(() => {
    dispatch(getCharacter(id));
  }, [dispatch, id]);

  const character = useSelector(state => state.character);
  const nameMovies = useSelector(state => state.nameMovies);
  const nameHomeWorld = useSelector(state => state.nameHomeWorld);
  const nameSpecies = useSelector(state => state.nameSpecies);
  const nameStarships = useSelector(state => state.nameStarships);
  const nameVehicles = useSelector(state => state.nameVehicles);

  const prevPage = () => {
    history.go(-1);
  };

  const films = character && (
    <ul>
      {character.films.map((film, index) => (
        <li key={film}>
          <Link
            to={`/peliculas/${film.slice(
              film.indexOf("films") + "films".length + 1,
              film.length - 1
            )}`}
          >
            {nameMovies[index]}
          </Link>
        </li>
      ))}
    </ul>
  );

  const species = character && (
    <ul>
      {character.species.map((specie, index) => (
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

  const starships = character && (
    <ul>
      {character.starships.map((starship, index) => (
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

  const vehicles = character && (
    <ul>
      {character.vehicles.map((vehicle, index) => (
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

  const homeworld = character && (
    <React.Fragment>
      <Link
        to={`/planetas/${nameHomeWorld.url.slice(
          nameHomeWorld.url.indexOf("planets") + "planets".length + 1,
          nameHomeWorld.url.length - 1
        )}`}
      >
        {nameHomeWorld.name}
      </Link>
    </React.Fragment>
  );

  return (
    <div>
      <button onClick={prevPage}>◀</button>

      {character && character ? (
        <div>
          <p>Nombre: {character.name}</p>
          <p>Nacimiento: {character.birth_year}</p>
          <p>Color de ojos: {character.eye_color}</p>
          <p>Genero: {character.gender}</p>
          <p>Color de cabello: {character.hair_color}</p>
          <p>Estatura: {character.height}</p>
          <p>Peso: {character.mass}</p>
          <p>Color de piel: {character.skin_color}</p>
          <p>Hogar: {homeworld}</p>
          <p>Peliculas: </p>
          {films}
          <p>Especies: </p>
          {species}
          <p>Naves: </p>
          {starships}
          <p>Vehiculos: </p>
          {vehicles}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsCharacter;
