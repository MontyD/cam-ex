import React, { useState, createContext } from "react";

const temperatureUnits = [
  {
    name: "metric",
    display: "°C",
  },
  {
    name: "imperial",
    display: "°F",
  },
] as const;

export interface TemperatureUnitContextType {
  currentUnit: typeof temperatureUnits[number];
  updateUnit: (newUnit: typeof temperatureUnits[number]) => void;
  temperatureUnits: typeof temperatureUnits;
}

export const unitContext = createContext<TemperatureUnitContextType>({
  currentUnit: temperatureUnits[0],
  updateUnit: () => null,
  temperatureUnits,
});

export const TemperatureUnitProvider = (props: { children: React.ReactNode }) => {
  const [currentUnit, setUnit] = useState<typeof temperatureUnits[number]>(temperatureUnits[0]);
  return (
    <unitContext.Provider
      value={{
        currentUnit,
        updateUnit: setUnit,
        temperatureUnits,
      }}
    >
      {props.children}
    </unitContext.Provider>
  );
};
