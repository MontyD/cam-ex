import React from "react";
import { Typography, makeStyles, createStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { ReactComponent as Icon } from "../weather-illustrations/raining-sun.svg";

const useStyles = makeStyles(() =>
  createStyles({
    block: {
      margin: "3rem auto 1rem",
      textAlign: "center",
      width: "80%",
    },
    icon: {
      display: "block",
      width: "8rem",
      height: "8rem",
      opacity: 0.6,
      margin: "0 auto",
    },
  })
);

export const EmptyState = (props: { error?: Error | null }) => {
  const { block, icon } = useStyles();
  return (
    <>
      <Typography variant="body1" className={block}>
        {!props.error
          ? "Search for a location using the search bar above"
          : "Something has gone wrong"}
      </Typography>
      <Icon className={icon} />
      {props.error ? (
        <Alert variant="outlined" severity="error" className={block}>
          An error occured:{" "}
          {props.error.message && props.error.message.length < 120
            ? props.error.message
            : "Please try again"}
        </Alert>
      ) : null}
    </>
  );
};
