import React from "react";
import { Link as RouteLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Image from "../../../static/Star_Wars_Death_Star.jpg";

const useStyles = makeStyles(theme => ({
  home: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#d2a600",
    position: "relative",
    top: "-85px"
  },
  categories: {
    width: "200px",
    textAlign: "center"
  },
  link: {
    color: "#fff",
    "&:hover": {
      textDecoration: "none"
    }
  }
}));

const ButtonHome = withStyles(theme => ({
  root: {
    width: "150px",
    backgroundColor: "#000",
    border: "2px solid #ffee00",
    margin: "12px",
    "&:hover": {
      backgroundColor: "#405400"
    }
  }
}))(Button);

function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.home}>
      <Typography variant="h3" component="h1" className={classes.title}>
        Star Wars
      </Typography>
      <Container className={classes.categories}>
        <ButtonHome variant="contained">
          <Link to="/peliculas" component={RouteLink} className={classes.link}>
            Peliculas
          </Link>
        </ButtonHome>
        <ButtonHome variant="contained">
          <Link to="/personajes" component={RouteLink} className={classes.link}>
            Personajes
          </Link>
        </ButtonHome>
      </Container>
    </Container>
  );
}

export default Home;
