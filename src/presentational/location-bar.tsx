import React from "react";
import {
  Grid,
  Typography,
  Paper,
  CircularProgress,
  makeStyles,
  createStyles,
} from "@material-ui/core";

import { SearchBar } from "./search-bar";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: "1rem",
      padding: "0.8rem",
    },
  })
);

export const LocationBar = (props: {
  onSearchConfirmed: (searchTerm: string) => void;
  isLoading: boolean;
  currentLocation?: string;
}) => {
  const { container } = useStyles();

  return (
    <Paper variant="outlined" className={container}>
      <Grid container spacing={3} alignItems="center">
        <Grid item md={6} sm={5} xs={5}>
          {props.isLoading ? (
            <CircularProgress />
          ) : (
            <Typography variant="h6">{props.currentLocation || "No location"}</Typography>
          )}
        </Grid>
        <Grid item md={6} xs={7} sm={7}>
          <SearchBar onValueSubmit={props.onSearchConfirmed} label="Search for location" />
        </Grid>
      </Grid>
    </Paper>
  );
};
