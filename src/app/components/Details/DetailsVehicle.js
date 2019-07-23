import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVehicle } from "../../globalStore/thunks/thunkVehicle";

const DetailsVehicle = ({ match, history }) => {
  const dispatch = useDispatch();

  const { id } = match.params;

  useEffect(() => {
    dispatch(getVehicle(id));
  }, [dispatch, id]);

  const vehicle = useSelector(state => state.vehicle);
  const nameMovies = useSelector(state => state.nameMovies);
  const nameCharacters = useSelector(state => state.nameCharacters);

  const prevPage = () => {
    history.go(-1);
  };

  const films = vehicle && (
    <ul>
      {vehicle.films.map((film, index) => (
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

  const pilots = vehicle && (
    <ul>
      {nameCharacters.map((pilot, index) => (
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

      {vehicle && vehicle ? (
        <div>
          <p>Nombre: {vehicle.name}</p>
          <p>Modelo: {vehicle.model}</p>
          <p>Clase de vehiculo: {vehicle.vehicle_class}</p>
          <p>Fabricante: {vehicle.manufacturer}</p>
          <p>Longitud: {vehicle.length}</p>
          <p>Costo en creditos: {vehicle.cost_in_credits}</p>
          <p>Personal: {vehicle.crew}</p>
          <p>Pasajeros: {vehicle.passengers}</p>
          <p>Velocidad atmosferica maxima: {vehicle.max_atmosphering_speed}</p>
          <p>Capacidad de carga: {vehicle.cargo_capacity}</p>
          <p>Consumibles: {vehicle.consumables}</p>
          <p>Peliculas: </p>
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

export default DetailsVehicle;
