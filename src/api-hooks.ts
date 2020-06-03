import { useEffect, useState, useCallback } from "react";

const ReallySimpleCache = new Map<string, any>();

export const useFetch = <T>(url: string | null, resultMapper?: (rawResult: any) => T) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    let isCancelled = false;

    if (url === null) {
      setData(null);
      return;
    }

    if (ReallySimpleCache.has(url)) {
      setData(ReallySimpleCache.get(url));
      return;
    }

    setLoading(true);
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((jsonResult) => {
        if (!isCancelled) {
          const parsedResult = resultMapper ? resultMapper(jsonResult) : jsonResult;
          ReallySimpleCache.set(url, parsedResult);
          setLoading(false);
          setData(parsedResult);
          setError(null);
        }
      })
      .catch((error) => {
        console.trace(error);
        console.log(error);
        setLoading(false);
        setData(null);
        setError(error);
      });
  }, [url, resultMapper]);

  return [loading, error, data] as const;
};

export interface LocationInfo {
  displayName: string;
  lat: number;
  lon: number;
}
export const useLocationSearch = (searchTerm: string) => {
  return useFetch<LocationInfo | null>(
    searchTerm
      ? `https://nominatim.openstreetmap.org/search?q=${searchTerm}&format=json&limit=1`
      : null,
    useCallback((result) => {
      const firstLocationResult = result?.[0];
      if (!firstLocationResult) {
        return null;
      }

      return {
        displayName: firstLocationResult.display_name,
        lat: Number(firstLocationResult.lat),
        lon: Number(firstLocationResult.lon),
      };
    }, [])
  );
};

export interface DayWeather {
  timestamp: number;
  temperature: number;
  pressure: number;
  tag?: string;
  description?: string;
}
export const useWeatherSearch = (unit: string, lon?: number, lat?: number) => {
  return useFetch<DayWeather[]>(
    lon !== undefined && lat !== undefined
      ? `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=&units=${unit}`
      : null,
    useCallback((response: any) => {
      const daily = response?.daily ?? [];
      return daily.map((weatherDay: any) => ({
        timestamp: weatherDay.dt,
        temperature: weatherDay.temp.day,
        pressure: weatherDay.pressure,
        tag: weatherDay.weather?.[0]?.main,
        description: weatherDay.weather?.[0]?.description,
      }));
    }, [])
  );
};
