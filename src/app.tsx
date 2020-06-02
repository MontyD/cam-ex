import React from "react";
import { Container } from "@material-ui/core";

import { LocationBar } from "./presentational/location-bar";
import { EmptyState } from "./presentational/empty-state";
import { WeatherView } from "./presentational/weather-view";

export const WeatherApp = () => {
  return (
    <Container maxWidth="lg">
      <LocationBar
        onSearchConfirmed={(e) => console.log(e)}
        currentLocation=""
      />
      {true ? <WeatherView /> : <EmptyState />}
    </Container>
  );
};
