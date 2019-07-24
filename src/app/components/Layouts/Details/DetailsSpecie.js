import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSpecie } from "../../../globalStore/thunks/thunkSpecie";

const DetailsSpecie = ({ match, history }) => {
  const dispatch = useDispatch();

  const { id } = match.params;

  useEffect(() => {
    dispatch(getSpecie(id));
  }, [dispatch, id]);

  const specie = useSelector(state => state.specie);
  const nameMovies = useSelector(state => state.nameMovies);
  const nameHomeWorld = useSelector(state => state.nameHomeWorld);
  const nameCharacters = useSelector(state => state.nameCharacters);

  const prevPage = () => {
    history.go(-1);
  };

  const films = specie && (
    <ul>
      {specie.films.map((film, index) => (
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

  const people = specie && (
    <ul>
      {specie.people.map((person, index) => (
        <li key={person}>
          <Link
            to={`/personajes/${person.slice(
              person.indexOf("people") + "people".length + 1,
              person.length - 1
            )}`}
          >
            {nameCharacters[index]}
          </Link>
        </li>
      ))}
    </ul>
  );

  const homeworld = specie && (
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

      {specie && specie ? (
        <div>
          <p>Nombre: {specie.name}</p>
          <p>Clasificacion: {specie.classification}</p>
          <p>Designacion: {specie.designation}</p>
          <p>Altura Media: {specie.average_height}</p>
          <p>Promedio de vida: {specie.average_lifespan}</p>
          <p>Colores de ojos: {specie.eye_colors}</p>
          <p>Colores de cabello: {specie.hair_colors}</p>
          <p>Colores de piel: {specie.skin_colors}</p>
          <p>Idioma: {specie.language}</p>

          <p>Mundo natal: {homeworld}</p>

          <p>Personajes: </p>
          {people}
          <p>Peliculas: </p>
          {films}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsSpecie;
