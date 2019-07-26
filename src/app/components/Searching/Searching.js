import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  searching: {
    margin: "16px",
    padding: "16px",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "400px",
      margin: "16px auto"
    }
  },
  progress: {
    margin: theme.spacing(2)
  }
}));

const Searching = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.searching}>
      <Typography variant="h5" component="h2">
        <CircularProgress className={classes.progress} />
      </Typography>
    </Paper>
  );
};

export default Searching;
