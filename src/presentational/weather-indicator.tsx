import React, { useState } from "react";
import { Grid, makeStyles, createStyles, Typography } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

import { WeatherIllustration } from "./weather-illustration";

const temperatureTypes = [
  {
    value: "celsius",
    display: "°C",
  },
  {
    value: "fahrenheit",
    display: "°F",
  },
] as const;

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

export const WeatherIndicator = () => {
  const { weatherIllustration, indicatorText } = useStyles();
  const [tempType, setTempType] = useState(temperatureTypes[0].value);

  return (
    <Grid container>
      <Grid item xs={12}>
        <ToggleButtonGroup
          exclusive
          value={tempType}
          onChange={(_, newValue) => setTempType(newValue)}
        >
          {temperatureTypes.map(({ value, display }) => (
            <ToggleButton key={value} value={value}>
              {display}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Grid>
      <Grid item md={12} sm={6} xs={6}>
        <div className={weatherIllustration}>
          <WeatherIllustration weatherType="something" />
        </div>
      </Grid>
      <Grid container item md={12} sm={6} xs={6}>
        <Grid item md={6} sm={12} xs={12}>
          <Typography variant="h3" className={indicatorText}>
            30°C
          </Typography>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Typography variant="h3" className={indicatorText}>
            1000mB
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
