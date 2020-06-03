# WeatherApp

A small and simple weather app, displaying the weather for a given location based on a search term.

## Running the app

The app requires you to have a free API key from OpenWeatherMap on `process.env.REACT_APP_WEATHER_KEY`.
This can be acquired by creating an account on [OpenWeather](https://home.openweathermap.org/api_keys).
This can then either be passed when any of the `npm` scripts are run (REACT_APP_WEATHER_KEY=<api_key> npm start), or placed in a `.env.local` file in the root of the project.

Ensure that you run `npm i` and use Node 10+

Then the standard create-react-app scripts will work:

```
npm start # starts a local dev environment
```

```
npm run build # builds a production copy of the app
```