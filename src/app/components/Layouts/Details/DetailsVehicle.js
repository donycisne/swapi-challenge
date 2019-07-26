import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVehicle } from "../../../globalStore/thunks/thunkVehicle";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core";
import Loading from "../../Loading/Loading";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Menu from "../Menu/Menu";

const useStyles = makeStyles(theme => ({
  detailVehicle: {
    margin: 0,
    padding: 0,
    maxWidth: "100%"
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "0"
  },
  vehicleList: {
    margin: "16px",
    padding: "8px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "400px",
      margin: "16px auto"
    }
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 700
  },
  listItem: {
    padding: "8px 0"
  },
  item: {
    margin: "16px 0"
  },
  itemText: {
    fontSize: "1rem",
    fontWeight: "700"
  },
  detailText: {
    fontSize: "1rem",
    marginLeft: "8px"
  },
  openingText: {
    fontSize: "1rem",
    lineHeight: "1.75rem"
  },
  link: {
    width: "100%",
    color: "#000",
    padding: "12px",
    fontSize: "1rem",
    backgroundColor: "#e0e0e0",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#ccc"
    }
  }
}));

const DetailsVehicle = ({ match, history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { id } = match.params;

  React.useEffect(() => {
    dispatch(getVehicle(id));
  }, [dispatch, id]);

  const prevPage = () => {
    history.go(-1);
  };

  const upperCase = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const format = surface => {
    return surface.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const isLoading = useSelector(state => state.isLoading);
  const vehicle = useSelector(state => state.vehicle);
  const nameCharacters = useSelector(state => state.nameCharacters);
  const nameMovies = useSelector(state => state.nameMovies);

  const name = vehicle && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Nombre: </span>
      <span className={classes.detailText}>{vehicle.name}</span>
    </Container>
  );

  const model = vehicle && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Modelo: </span>
      <span className={classes.detailText}>{upperCase(vehicle.model)}</span>
    </Container>
  );

  const vehicleClass = vehicle && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Clase de veh&iacute;culo: </span>
      <span className={classes.detailText}>
        {upperCase(vehicle.vehicle_class)}
      </span>
    </Container>
  );

  const manufacturer = vehicle && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Fabricante: </span>
      <span className={classes.detailText}>{vehicle.manufacturer}</span>
    </Container>
  );

  const length = vehicle && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Longitud: </span>
      <span className={classes.detailText}>{vehicle.length} m</span>
    </Container>
  );

  const costInCredits = vehicle && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Costo en cr&eacute;ditos: </span>
      <span className={classes.detailText}>
        {upperCase(format(vehicle.cost_in_credits))}
      </span>
    </Container>
  );

  const crew = vehicle && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Tripulaci&oacute;n: </span>
      <span className={classes.detailText}>{vehicle.crew}</span>
    </Container>
  );

  const passengers = vehicle && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Pasajeros: </span>
      <span className={classes.detailText}>{vehicle.passengers}</span>
    </Container>
  );

  const maxAtmospheringSpeed = vehicle && (
    <Container className={classes.item}>
      <span className={classes.itemText}>
        Velocidad atmosf&eacute;rica m&aacute;xima:{" "}
      </span>
      <span className={classes.detailText}>
        {format(vehicle.max_atmosphering_speed)}
      </span>
    </Container>
  );

  const cargoCapacity = vehicle && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Capacidad de carga: </span>
      <span className={classes.detailText}>
        {format(vehicle.cargo_capacity)} kg
      </span>
    </Container>
  );

  const consumables = vehicle && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Consumibles: </span>
      <span className={classes.detailText}>
        {upperCase(vehicle.consumables)}
      </span>
    </Container>
  );

  const films =
    nameMovies && nameMovies.length > 0
      ? vehicle && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Pel&iacute;culas: </span>
            <List>
              {vehicle.films.map((film, index) => (
                <ListItem key={film} className={classes.listItem}>
                  <Link
                    className={classes.link}
                    to={`/peliculas/${film.slice(
                      film.indexOf("films") + "films".length + 1,
                      film.length - 1
                    )}`}
                  >
                    {nameMovies[index]}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Container>
        )
      : null;

  const pilots =
    nameCharacters && nameCharacters.length > 0
      ? vehicle && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Pilotos: </span>
            <List>
              {vehicle.pilots.map((pilot, index) => (
                <ListItem key={pilot} className={classes.listItem}>
                  <Link
                    className={classes.link}
                    to={`/personajes/${pilot.slice(
                      pilot.indexOf("people") + "people".length + 1,
                      pilot.length - 1
                    )}`}
                  >
                    {nameCharacters[index]}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Container>
        )
      : null;

  const vehicleList =
    vehicle && vehicle ? (
      <Paper className={classes.vehicleList}>
        {name}
        {model}
        {vehicleClass}
        {manufacturer}
        {length}
        {costInCredits}
        {crew}
        {passengers}
        {maxAtmospheringSpeed}
        {cargoCapacity}
        {consumables}
        {films}
        {pilots}
      </Paper>
    ) : (
      <Loading />
    );

  return (
    <Container className={classes.detailVehicle}>
      <Paper className={classes.paper}>
        <Menu />
        <Typography className={classes.title}>Veh&iacute;culo</Typography>
        <IconButton
          className={classes.iconButton}
          aria-label="Back"
          onClick={prevPage}
        >
          <ArrowBackIos />
        </IconButton>
      </Paper>
      {isLoading ? <Loading /> : vehicleList}
    </Container>
  );
};

export default DetailsVehicle;
