import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  searching: {
    margin: "16px",
    padding: "16px",
    textAlign: "center"
  }
}));

const Searching = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.searching}>
      <Typography variant="h5" component="h2">
        Buscando...
      </Typography>
    </Paper>
  );
};

export default Searching;
