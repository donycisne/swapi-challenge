import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../../globalStore/thunks/thunkCharacter";
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
  detailCharacter: {
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
  characterList: {
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

const DetailsCharacter = ({ match, history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { id } = match.params;

  React.useEffect(() => {
    dispatch(getCharacter(id));
  }, [dispatch, id]);

  const prevPage = () => {
    history.go(-1);
  };

  const isLoading = useSelector(state => state.isLoading);
  const character = useSelector(state => state.character);
  const nameHomeWorld = useSelector(state => state.nameHomeWorld);
  const nameMovies = useSelector(state => state.nameMovies);
  const nameSpecies = useSelector(state => state.nameSpecies);
  const nameStarships = useSelector(state => state.nameStarships);
  const nameVehicles = useSelector(state => state.nameVehicles);

  const name = character && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Nombre: </span>
      <span className={classes.detailText}>{character.name}</span>
    </Container>
  );

  const birthYear = character && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Nacimiento: </span>
      <span className={classes.detailText}>{character.birth_year}</span>
    </Container>
  );

  const eyeColor = character && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Color de ojos: </span>
      <span className={classes.detailText}>
        {character.eye_color.charAt(0).toUpperCase() +
          character.eye_color.slice(1)}
      </span>
    </Container>
  );

  const gender = character && (
    <Container className={classes.item}>
      <span className={classes.itemText}>G&eacute;nero: </span>
      <span className={classes.detailText}>
        {character.gender.charAt(0).toUpperCase() + character.gender.slice(1)}
      </span>
    </Container>
  );

  const hairColor = character && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Color de cabello: </span>
      <span className={classes.detailText}>
        {character.hair_color.charAt(0).toUpperCase() +
          character.hair_color.slice(1)}
      </span>
    </Container>
  );

  const height = character && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Estatura: </span>
      <span className={classes.detailText}>{character.height} cm</span>
    </Container>
  );

  const mass = character && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Peso: </span>
      <span className={classes.detailText}>{character.mass} kg</span>
    </Container>
  );

  const skinColor = character && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Color de piel: </span>
      <span className={classes.detailText}>
        {character.skin_color.charAt(0).toUpperCase() +
          character.skin_color.slice(1)}
      </span>
    </Container>
  );

  const homeworld = character && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Hogar: </span>
      <List>
        <ListItem className={classes.listItem}>
          <Link
            className={classes.link}
            to={`/planetas/${nameHomeWorld.url.slice(
              nameHomeWorld.url.indexOf("planets") + "planets".length + 1,
              nameHomeWorld.url.length - 1
            )}`}
          >
            {nameHomeWorld.name}
          </Link>
        </ListItem>
      </List>
    </Container>
  );

  const films =
    nameMovies && nameMovies.length > 0
      ? character && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Pel&iacute;culas: </span>
            <List>
              {character.films.map((film, index) => (
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

  const species =
    nameSpecies && nameSpecies.length > 0
      ? character && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Especies: </span>
            <List>
              {character.species.map((specie, index) => (
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

  const starships =
    nameStarships && nameStarships.length > 0
      ? character && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Naves: </span>
            <List>
              {character.starships.map((starship, index) => (
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
      ? character && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Veh&iacute;culos: </span>
            <List>
              {character.vehicles.map((vehicle, index) => (
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

  const characterList =
    character && character ? (
      <Paper className={classes.characterList}>
        {name}
        {birthYear}
        {eyeColor}
        {gender}
        {hairColor}
        {height}
        {mass}
        {skinColor}
        {homeworld}
        {films}
        {species}
        {starships}
        {vehicles}
      </Paper>
    ) : (
      <Loading />
    );

  return (
    <Container className={classes.detailCharacter}>
      <Paper className={classes.paper}>
        <Menu />
        <Typography className={classes.title}>Personaje</Typography>
        <IconButton
          className={classes.iconButton}
          aria-label="Back"
          onClick={prevPage}
        >
          <ArrowBackIos />
        </IconButton>
      </Paper>
      {isLoading ? <Loading /> : characterList}
    </Container>
  );
};

export default DetailsCharacter;
