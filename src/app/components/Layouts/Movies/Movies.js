import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../globalStore/thunks/thunkMovies";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import Menu from "../Menu/Menu";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Loading from "../../Loading/Loading";
import Searching from "../../Searching/Searching";

const useStyles = makeStyles(theme => ({
  movies: {
    minWidth: "100vw",
    padding: "0"
  },
  navbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "pink",
    padding: "16px"
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderRadius: "0",
    position: "relative",
    zIndex: 1
  },
  title: {
    textAlign: "center",
    marginBottom: "16px",
    fontWeight: "700"
  },
  iconButton: {
    padding: 10
  },
  paperMovies: {
    margin: "16px",
    padding: "8px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "400px",
      margin: "16px auto"
    }
  },
  paperLoading: {
    margin: "16px",
    padding: "16px",
    textAlign: "center"
  },
  listItem: {
    padding: "0"
  },
  link: {
    fontSize: "16px",
    width: "100%",
    color: "#000",
    padding: "16px",
    "&:hover": {
      backgroundColor: "#dadada",
      textDecoration: "none"
    }
  },
  search: {
    border: "1px solid #cecece",
    borderRadius: "50px",
    padding: "0 16px"
  }
}));

const Movies = ({ match }) => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [results, setResults] = React.useState([]);

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const searchMovies = async search => {
    try {
      const request = await fetch(
        `https://swapi.dev/api/films/?search=${search}`
      );
      const response = await request.json();
      const values = response.results;
      const searchValues = values.reduce((acc, cur) => {
        return acc.concat([{ title: cur.title, url: cur.url }]);
      }, []);

      return searchValues;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      searchMovies(debouncedSearchTerm).then(resultsSearch => {
        setIsSearching(false);
        setResults(resultsSearch);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  React.useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const moviesData = useSelector(state => state.movies);
  const isLoading = useSelector(state => state.isLoading);
  const classes = useStyles();

  const movies = (
    <Paper className={classes.paperMovies}>
      <Typography variant="h5" component="h2" className={classes.title}>
        Pel&iacute;culas
      </Typography>
      <List>
        {moviesData &&
          moviesData.map(movie => (
            <ListItem key={movie.episode_id} className={classes.listItem}>
              <Link
                component={RouteLink}
                className={classes.link}
                to={`${match.url}/${movie.url.slice(
                  movie.url.indexOf("films") + "films".length + 1,
                  movie.url.length - 1
                )}`}
              >
                {movie.title}
              </Link>
            </ListItem>
          ))}
      </List>
    </Paper>
  );

  const movieSearch = isSearching ? (
    <Searching />
  ) : searchTerm !== "" ? (
    <Paper className={classes.paperMovies}>
      {results.map(result => (
        <ListItem key={result.title} className={classes.listItem}>
          <Link
            component={RouteLink}
            className={classes.link}
            to={`${match.url}/${result.url.slice(
              result.url.indexOf("films") + "films".length + 1,
              result.url.length - 1
            )}`}
          >
            {result.title}
          </Link>
        </ListItem>
      ))}
    </Paper>
  ) : (
    movies
  );

  return (
    <Container className={classes.movies}>
      <Paper className={classes.paper}>
        <Menu />
        <InputBase
          className={classes.search}
          placeholder="Buscar"
          inputProps={{ "aria-label": "Buscar" }}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {isLoading ? <Loading /> : movieSearch}
    </Container>
  );
};

export default Movies;
