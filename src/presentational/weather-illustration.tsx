import React from "react";

import { ReactComponent as CloudySunny } from "../weather-illustrations/cloudy-sunny.svg";

export const WeatherIllustration = ({
  weatherType,
}: {
  weatherType: string;
}) => {
  switch (weatherType) {
    default:
      return <CloudySunny />;
  }
};
