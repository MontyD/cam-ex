import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import { OpenLayersMap } from "./open-layers-map";
import { WeatherIndicator } from "./weather-indicator";
import { DaySlider } from "./day-slider";
import { DayWeather } from "../api-hooks";

export const WeatherView = (props: {
  centerPoint: [number, number];
  weatherData: DayWeather[] | null;
}) => {
  const [dayIndex, setDayIndex] = useState(0);
  const currentWeather = props.weatherData?.[dayIndex];

  return (
    <Grid container spacing={3} direction="row-reverse">
      <Grid item md={6} sm={12} xs={12}>
        {currentWeather ? <WeatherIndicator {...currentWeather} /> : null}
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <OpenLayersMap centerPoint={props.centerPoint} />
      </Grid>
      <Grid item xs={12}>
        <DaySlider onChange={setDayIndex} />
      </Grid>
    </Grid>
  );
};
