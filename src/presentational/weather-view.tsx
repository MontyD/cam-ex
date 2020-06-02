import React from "react";
import { Grid } from "@material-ui/core";

import { OpenLayersMap } from "./open-layers-map";
import { WeatherIndicator } from "./weather-indicator";
import { DaySlider } from "./day-slider";

export const WeatherView = () => {
  return (
    <Grid container spacing={3} direction="row-reverse">
      <Grid item md={6} sm={12} xs={12}>
        <WeatherIndicator />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <OpenLayersMap />
      </Grid>
      <Grid item xs={12}>
        <DaySlider />
      </Grid>
    </Grid>
  );
};
