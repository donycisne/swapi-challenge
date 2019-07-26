import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../../globalStore/thunks/thunkMovie";
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
  detailMovie: {
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
  movieList: {
    margin: "16px",
    padding: "8px"
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

const DetailsMovie = ({ match, history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { id } = match.params;

  React.useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  const prevPage = () => {
    history.go(-1);
  };

  const toRoman = num => {
    let result = "";
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
    for (let i = 0; i <= decimal.length; i++) {
      while (num % decimal[i] < num) {
        result += roman[i];
        num -= decimal[i];
      }
    }
    return result;
  };

  const toDate = date => {
    const newDate = date.replace(/-/g, "/");
    const reverseDate = newDate
      .split("/")
      .reverse()
      .join("/");
    return reverseDate;
  };

  const isLoading = useSelector(state => state.isLoading);
  const movie = useSelector(state => state.movie);
  const nameCharacters = useSelector(state => state.nameCharacters);
  const namePlanets = useSelector(state => state.namePlanets);
  const nameStarships = useSelector(state => state.nameStarships);
  const nameVehicles = useSelector(state => state.nameVehicles);
  const nameSpecies = useSelector(state => state.nameSpecies);

  const title = movie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>T&iacute;tulo: </span>
      <span className={classes.detailText}>{movie.title}</span>
    </Container>
  );

  const episode = movie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Episodio: </span>
      <span className={classes.detailText}>{toRoman(movie.episode_id)}</span>
    </Container>
  );

  const openingCrawl = movie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Apertura de rastreo: </span>
      <p className={classes.openingText}>{movie.opening_crawl}</p>
    </Container>
  );

  const director = movie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Director: </span>
      <span className={classes.detailText}>{movie.director}</span>
    </Container>
  );

  const producer = movie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Productor: </span>
      <span className={classes.detailText}>{movie.producer}</span>
    </Container>
  );

  const releaseDate = movie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Fecha de estreno: </span>
      <span className={classes.detailText}>{toDate(movie.release_date)}</span>
    </Container>
  );

  const characters =
    nameCharacters && nameCharacters.length > 0
      ? movie && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Personajes: </span>
            <List>
              {movie.characters.map((character, index) => (
                <ListItem key={character} className={classes.listItem}>
                  <Link
                    className={classes.link}
                    to={`/personajes/${character.slice(
                      character.indexOf("people") + "people".length + 1,
                      character.length - 1
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

  const planets =
    namePlanets && namePlanets.length > 0
      ? movie && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Planetas: </span>
            <List>
              {movie.planets.map((planet, index) => (
                <ListItem key={planet} className={classes.listItem}>
                  <Link
                    className={classes.link}
                    to={`/planetas/${planet.slice(
                      planet.indexOf("planets") + "planets".length + 1,
                      planet.length - 1
                    )}`}
                  >
                    {namePlanets[index]}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Container>
        )
      : null;

  const starships =
    nameStarships && nameStarships.length > 0
      ? movie && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Naves: </span>
            <List>
              {movie.starships.map((starship, index) => (
                <ListItem key={starship} className={classes.listItem}>
                  <Link
                    className={classes.link}
                    to={`/naves/${starship.slice(
                      starship.indexOf("starships") + "starships".length + 1,
                      starship.length - 1
                    )}`}
                  >
                    {nameStarships[index]}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Container>
        )
      : null;

  const vehicles =
    nameVehicles && nameVehicles.length > 0
      ? movie && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Veh&iacute;culos: </span>
            <List>
              {movie.vehicles.map((vehicle, index) => (
                <ListItem key={vehicle} className={classes.listItem}>
                  <Link
                    className={classes.link}
                    to={`/vehiculos/${vehicle.slice(
                      vehicle.indexOf("vehicles") + "vehicles".length + 1,
                      vehicle.length - 1
                    )}`}
                  >
                    {nameVehicles[index]}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Container>
        )
      : null;

  const species =
    nameSpecies && nameSpecies.length > 0
      ? movie && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Veh&iacute;culos: </span>
            <List>
              {movie.species.map((specie, index) => (
                <ListItem key={specie} className={classes.listItem}>
                  <Link
                    className={classes.link}
                    to={`/especies/${specie.slice(
                      specie.indexOf("species") + "species".length + 1,
                      specie.length - 1
                    )}`}
                  >
                    {nameSpecies[index]}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Container>
        )
      : null;

  const movieList =
    movie && movie ? (
      <Paper className={classes.movieList}>
        {title}
        {episode}
        {openingCrawl}
        {director}
        {producer}
        {releaseDate}
        {characters}
        {planets}
        {starships}
        {vehicles}
        {species}
      </Paper>
    ) : (
      <Loading />
    );

  return (
    <Container className={classes.detailMovie}>
      <Paper className={classes.paper}>
        <Menu />
        <Typography className={classes.title}>Pel&iacute;cula</Typography>
        <IconButton
          className={classes.iconButton}
          aria-label="Back"
          onClick={prevPage}
        >
          <ArrowBackIos />
        </IconButton>
      </Paper>
      {isLoading ? <Loading /> : movieList}
    </Container>
  );
};

export default DetailsMovie;
