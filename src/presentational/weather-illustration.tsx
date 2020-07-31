import React from "react";

import { ReactComponent as CloudySunny } from "../weather-illustrations/cloudy-sunny.svg";
import { ReactComponent as Foggy } from "../weather-illustrations/foggy.svg";
import { ReactComponent as Lightning } from "../weather-illustrations/lightning.svg";
import { ReactComponent as RainingSun } from "../weather-illustrations/raining-sun.svg";
import { ReactComponent as Raining } from "../weather-illustrations/raining.svg";
import { ReactComponent as SnowCloudy } from "../weather-illustrations/snow-cloudy.svg";
import { ReactComponent as Sun } from "../weather-illustrations/sun.svg";
import { ReactComponent as Wind } from "../weather-illustrations/wind.svg";

export const WeatherIllustration = ({ weatherType }: { weatherType?: string }) => {
  switch (weatherType) {
    case "Thunderstorm":
      return <Lightning />;
    case "Drizzle":
      return <RainingSun />;
    case "Rain":
      return <Raining />;
    case "Snow":
      return <SnowCloudy />;
    case "Smoke":
    case "Haze":
    case "Fog":
    case "Sand":
    case "Dust":
    case "Ash":
      return <Foggy />;
    case "Squall":
    case "Tornado":
      return <Wind />;
    case "Clear":
      return <Sun />;
    case "Clouds":
      return <CloudySunny />;
    default:
      return <CloudySunny />;
  }
};
