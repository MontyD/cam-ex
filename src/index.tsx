import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { WeatherApp } from "./app";
import { TemperatureUnitProvider } from "./context/temperature-unit";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <TemperatureUnitProvider>
      <WeatherApp />
    </TemperatureUnitProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
