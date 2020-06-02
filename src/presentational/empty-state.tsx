import React from "react";
import { Typography, makeStyles, createStyles } from "@material-ui/core";

import { ReactComponent as Icon } from "../weather-illustrations/raining-sun.svg";

const useStyles = makeStyles(() =>
  createStyles({
    text: {
      margin: "3rem auto 1rem",
      textAlign: "center",
      width: "100%",
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

export const EmptyState = () => {
  const { text, icon } = useStyles();
  return (
    <>
      <Typography variant="body1" className={text}>
        Search for a location using the search bar above
      </Typography>
      <Icon className={icon} />
    </>
  );
};
