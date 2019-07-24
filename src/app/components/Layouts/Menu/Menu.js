import React from "react";
import { Link as RouteLink } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";

const useStyles = makeStyles(theme => ({
  menu: {
    backgroundColor: "pink"
  },
  title: {
    color: "#000",
    fontSize: "32px",
    fontWeight: "700",
    textTransform: "uppercase",
    padding: "30px 15px"
  },
  menuList: {
    backgroundColor: "purple"
  },
  button: {
    backgroundColor: "#000",
    borderRadius: "50%",
    minWidth: "36px"
  },
  icon: {
    color: "#fff"
  },
  text: {
    color: "#000"
  },
  logo: {
    textAlign: "center",
    backgroundColor: "#d2a600",
    "&:hover": {
      backgroundColor: "#d2a600"
    }
  },
  list: {
    padding: "0"
  },
  containerMenu: {
    padding: "0"
  }
}));

const Menu = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    menu: false
  });

  const toggleMenu = (side, open) => event => {
    setState({ ...state, [side]: open });
  };

  const sideMenu = side => (
    <Container
      className={classes.containerMenu}
      role="presentation"
      onClick={toggleMenu(side, false)}
      onKeyDown={toggleMenu(side, false)}
    >
      <List className={classes.list}>
        <ListItem button className={classes.logo}>
          <Link to="/" component={RouteLink} className={classes.title}>
            Star Wars
          </Link>
        </ListItem>
        {["Peliculas", "Personajes"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} className={classes.text} />
          </ListItem>
        ))}
      </List>
    </Container>
  );

  return (
    <React.Fragment>
      <IconButton onClick={toggleMenu("menu", true)} aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={state.menu}
        onClose={toggleMenu("menu", false)}
        onOpen={toggleMenu("menu", true)}
      >
        {sideMenu("menu")}
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default Menu;
