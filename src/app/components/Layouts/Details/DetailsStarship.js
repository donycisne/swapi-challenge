import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStarship } from "../../../globalStore/thunks/thunkStarship";
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
  detailStarship: {
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
  starshipList: {
    margin: "16px",
    padding: "8px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "400px",
      margin: "16px auto"
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "850px"
    }
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 700
  },
  itemsList: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  listItem: {
    padding: "8px 0",
    [theme.breakpoints.up("md")]: {
      width: "32%",
      margin: "0 5px"
    }
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

const DetailsStarship = ({ match, history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { id } = match.params;

  React.useEffect(() => {
    dispatch(getStarship(id));
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
  const starship = useSelector(state => state.starship);
  const nameCharacters = useSelector(state => state.nameCharacters);
  const nameMovies = useSelector(state => state.nameMovies);

  const name = starship && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Nombre: </span>
      <span className={classes.detailText}>{starship.name}</span>
    </Container>
  );

  const model = starship && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Modelo: </span>
      <span className={classes.detailText}>{starship.model}</span>
    </Container>
  );

  const starshipClass = starship && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Clase de nave: </span>
      <span className={classes.detailText}>{starship.starship_class}</span>
    </Container>
  );

  const manufacturer = starship && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Fabricante: </span>
      <span className={classes.detailText}>{starship.manufacturer}</span>
    </Container>
  );

  const costInCredits = starship && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Costo en cr&eacute;ditos: </span>
      <span className={classes.detailText}>
        {format(starship.cost_in_credits)}
      </span>
    </Container>
  );

  const length = starship && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Longitud: </span>
      <span className={classes.detailText}>{format(starship.length)} m</span>
    </Container>
  );

  const crew = starship && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Tripulaci&oacute;n: </span>
      <span className={classes.detailText}>{starship.crew}</span>
    </Container>
  );

  const passengers = starship && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Pasajeros: </span>
      <span className={classes.detailText}>{starship.passengers}</span>
    </Container>
  );

  const maxAtmospheringSpeed = starship && (
    <Container className={classes.item}>
      <span className={classes.itemText}>
        Velocidad atmosf&eacute;rica m&aacute;xima:{" "}
      </span>
      <span className={classes.detailText}>
        {format(starship.max_atmosphering_speed)}
      </span>
    </Container>
  );

  const hyperdriveRating = starship && (
    <Container className={classes.item}>
      <span className={classes.itemText}>
        Calificaci&oacute;n de hiperimpulsi&oacute;n:{" "}
      </span>
      <span className={classes.detailText}>{starship.hyperdrive_rating}</span>
    </Container>
  );

  const MGLT = starship && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Megalights: </span>
      <span className={classes.detailText}>{format(starship.MGLT)}</span>
    </Container>
  );

  const cargoCapacity = starship && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Capacidad de carga: </span>
      <span className={classes.detailText}>
        {format(starship.cargo_capacity)} kg
      </span>
    </Container>
  );

  const consumables = starship && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Consumibles: </span>
      <span className={classes.detailText}>
        {upperCase(starship.consumables)}
      </span>
    </Container>
  );

  const films =
    nameMovies && nameMovies.length > 0
      ? starship && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Pel&iacute;culas: </span>
            <List className={classes.itemsList}>
              {starship.films.map((film, index) => (
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
      ? starship && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Pilotos: </span>
            <List className={classes.itemsList}>
              {starship.pilots.map((pilot, index) => (
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

  const starshipList =
    starship && starship ? (
      <Paper className={classes.starshipList}>
        {name}
        {model}
        {starshipClass}
        {manufacturer}
        {costInCredits}
        {length}
        {crew}
        {passengers}
        {maxAtmospheringSpeed}
        {hyperdriveRating}
        {MGLT}
        {cargoCapacity}
        {consumables}
        {films}
        {pilots}
      </Paper>
    ) : (
      <Loading />
    );

  return (
    <Container className={classes.detailStarship}>
      <Paper className={classes.paper}>
        <Menu />
        <Typography className={classes.title}>Nave</Typography>
        <IconButton
          className={classes.iconButton}
          aria-label="Back"
          onClick={prevPage}
        >
          <ArrowBackIos />
        </IconButton>
      </Paper>
      {isLoading ? <Loading /> : starshipList}
    </Container>
  );
};

export default DetailsStarship;
