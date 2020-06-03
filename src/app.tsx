import React, { useState, useContext } from "react";
import { Container } from "@material-ui/core";

import { LocationBar } from "./presentational/location-bar";
import { EmptyState } from "./presentational/empty-state";
import { WeatherView } from "./presentational/weather-view";
import { useLocationSearch, useWeatherSearch } from "./api-hooks";
import { unitContext } from "./context/temperature-unit";

export const WeatherApp = () => {
  const { currentUnit } = useContext(unitContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationLoading, locationError, locationData] = useLocationSearch(searchTerm);
  const [weatherLoading, weatherError, weatherData] = useWeatherSearch(
    currentUnit.name,
    locationData?.lon,
    locationData?.lat
  );

  const isLoading = locationLoading || weatherLoading;
  const hasError = !!locationError || !!weatherError;
  return (
    <Container maxWidth="lg">
      <LocationBar
        onSearchConfirmed={setSearchTerm}
        currentLocation={locationData?.displayName}
        isLoading={isLoading}
      />
      {locationData && !hasError ? (
        <WeatherView centerPoint={[locationData.lon, locationData.lat]} weatherData={weatherData} />
      ) : (
        <EmptyState error={locationError ?? weatherError} />
      )}
    </Container>
  );
};
