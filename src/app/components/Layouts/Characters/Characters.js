import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { getCharacters } from "../../../globalStore/thunks/thunkCharacters";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "../Menu/Menu";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Loading from "../../Loading/Loading";
import Searching from "../../Searching/Searching";

const useStyles = makeStyles(theme => ({
  characters: {
    minWidth: "100vw",
    padding: "0"
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
  paperCharacters: {
    margin: "16px",
    padding: "8px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "400px",
      margin: "16px auto"
    }
  },
  title: {
    textAlign: "center",
    marginBottom: "16px",
    fontWeight: "700"
  },
  iconButton: {
    padding: 10
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

const Characters = ({ match }) => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);

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

  const searchCharacters = async search => {
    try {
      const request = await fetch(
        `https://swapi.dev/api/people/?search=${search}`
      );
      const response = await request.json();
      const values = response.results;
      const searchValues = values.reduce((acc, cur) => {
        return acc.concat([{ name: cur.name, url: cur.url }]);
      }, []);

      return searchValues;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      searchCharacters(debouncedSearchTerm).then(resultsSearch => {
        setIsSearching(false);
        setSearchResults(resultsSearch);
      });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  React.useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const charactersData = useSelector(state => state.characters);
  const isLoading = useSelector(state => state.isLoading);
  const classes = useStyles();

  const characters = (
    <Paper className={classes.paperCharacters}>
      <Typography variant="h5" component="h2" className={classes.title}>
        Personajes
      </Typography>
      <List>
        {charactersData &&
          charactersData.map(character => (
            <ListItem key={character.name} className={classes.listItem}>
              <Link
                component={RouteLink}
                className={classes.link}
                to={`${match.url}/${character.url.slice(
                  character.url.indexOf("people") + "people".length + 1,
                  character.url.length - 1
                )}`}
              >
                {character.name}
              </Link>
            </ListItem>
          ))}
      </List>
    </Paper>
  );

  const searchingCharacters = (
    <Paper className={classes.paperCharacters}>
      <List>
        {searchResults.map(search => (
          <ListItem key={search.name} className={classes.listItem}>
            <Link
              component={RouteLink}
              className={classes.link}
              to={`${match.url}/${search.url.slice(
                search.url.indexOf("people") + "people".length + 1,
                search.url.length - 1
              )}`}
            >
              {search.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Paper>
  );

  const characterSearch = isSearching ? (
    <Searching />
  ) : searchTerm !== "" ? (
    searchingCharacters
  ) : (
    characters
  );

  return (
    <Container className={classes.characters}>
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
      {isLoading ? <Loading /> : characterSearch}
    </Container>
  );
};

export default Characters;
