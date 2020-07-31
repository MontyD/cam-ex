import React, { useContext } from "react";
import { Grid, makeStyles, createStyles, Typography } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

import { DayWeather } from "../api-hooks";
import { unitContext } from "../context/temperature-unit";
import { WeatherIllustration } from "./weather-illustration";

const useStyles = makeStyles(() =>
  createStyles({
    weatherIllustration: {
      alignSelf: "center",
      justifySelf: "center",
      minHeight: "250px",
      height: "20vh",
    },
    indicatorText: {
      textAlign: "center",
    },
  })
);

export const WeatherIndicator = (props: DayWeather) => {
  const { weatherIllustration, indicatorText } = useStyles();
  const { temperatureUnits, updateUnit, currentUnit } = useContext(unitContext);

  return (
    <Grid container>
      <Grid item xs={12}>
        <ToggleButtonGroup
          exclusive
          value={currentUnit}
          onChange={(_, newValue) => {
            if (newValue) {
              updateUnit(newValue);
            }
          }}
        >
          {temperatureUnits.map((unit) => (
            <ToggleButton key={unit.name} value={unit}>
              {unit.display}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Grid>
      <Grid item md={12} sm={6} xs={6}>
        <div className={weatherIllustration}>
          <WeatherIllustration weatherType={props.tag} />
        </div>
      </Grid>
      <Grid container item md={12} sm={6} xs={6}>
        <Grid item md={6} sm={12} xs={12}>
          <Typography variant="h3" className={indicatorText}>
            {props.temperature}
            {currentUnit.display}
          </Typography>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Typography variant="h3" className={indicatorText}>
            {props.pressure}mB
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
