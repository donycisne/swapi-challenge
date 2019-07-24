import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlanet } from "../../../globalStore/thunks/thunkPlanet";

const DetailsPlanet = ({ match, history }) => {
  const dispatch = useDispatch();

  const { id } = match.params;

  useEffect(() => {
    dispatch(getPlanet(id));
  }, [dispatch, id]);

  const planet = useSelector(state => state.planet);
  const nameCharacters = useSelector(state => state.nameCharacters);
  const nameMovies = useSelector(state => state.nameMovies);

  const prevPage = () => {
    history.go(-1);
  };

  const films = planet && (
    <ul>
      {planet.films.map((film, index) => (
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

  const residents = planet && (
    <ul>
      {planet.residents.map((resident, index) => (
        <li key={resident}>
          <Link
            to={`/personajes/${resident.slice(
              resident.indexOf("people") + "people".length + 1,
              resident.length - 1
            )}`}
          >
            {nameCharacters[index]}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <button onClick={prevPage}>◀</button>

      {planet && planet ? (
        <div>
          <p>Nombre: {planet.name}</p>
          <p>Diametro: {planet.diameter}</p>
          <p>Periodo de rotacion: {planet.rotation_period}</p>
          <p>Periodo orbital: {planet.orbital_period}</p>
          <p>Gravedad: {planet.gravity}</p>
          <p>Poblacion: {planet.population}</p>
          <p>Clima: {planet.climate}</p>
          <p>Terreno: {planet.terrain}</p>
          <p>Superficie del agua: {planet.surface_water}</p>
          <p>Films: </p>
          {films}
          <p>Residentes: </p>
          {residents}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsPlanet;
