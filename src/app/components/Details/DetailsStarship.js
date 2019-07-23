import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStarship } from "../../globalStore/thunks/thunkStarship";

const DetailsStarship = ({ match, history }) => {
  const dispatch = useDispatch();

  const { id } = match.params;

  useEffect(() => {
    dispatch(getStarship(id));
  }, [dispatch, id]);

  const starship = useSelector(state => state.starship);
  const nameCharacters = useSelector(state => state.nameCharacters);
  const nameMovies = useSelector(state => state.nameMovies);

  const prevPage = () => {
    history.go(-1);
  };

  const films = starship && (
    <ul>
      {starship.films.map((film, index) => (
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

  const pilots = starship && (
    <ul>
      {starship.pilots.map((pilot, index) => (
        <li key={pilot}>
          <Link
            to={`/personajes/${pilot.slice(
              pilot.indexOf("people") + "people".length + 1,
              pilot.length - 1
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

      {starship && starship ? (
        <div>
          <p>Nombre: {starship.name}</p>
          <p>Modelo: {starship.model}</p>
          <p>Clase de nave: {starship.starship_class}</p>
          <p>Fabricante: {starship.manufacturer}</p>
          <p>Costo en Creditos: {starship.cost_in_credits}</p>
          <p>Longitud: {starship.length}</p>
          <p>Personal: {starship.crew}</p>
          <p>Velocidad atmosferica maxima: {starship.max_atmosphering_speed}</p>
          <p>Calificacion de hiperimpulsion: {starship.hyperdrive_rating}</p>
          <p>Megalights: {starship.MGLT}</p>
          <p>Capacidad de carga: {starship.cargo_capacity}</p>
          <p>Consumibles: {starship.consumables}</p>
          <p>Films: </p>
          {films}
          <p>Pilotos: </p>
          {pilots}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsStarship;
