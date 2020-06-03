# WeatherApp

A small and simple weather app, displaying the weather for a given location based on a search term.

## Running the app

The app requires you to have a free API key from OpenWeatherMap on `process.env.REACT_APP_WEATHER_KEY`.
This can be acquired by creating an account on [OpenWeather](https://home.openweathermap.org/api_keys).


This key can then either be passed when any of the `npm` scripts are run (`REACT_APP_WEATHER_KEY=<api_key> npm start`), or placed in a `.env.local` file in the root of the project.

Ensure that you run `npm i` and use Node 10+

Then the standard create-react-app scripts will work:

```
npm start # starts a local dev environment
```

```
npm run build # builds a production copy of the app
```


### Hosted example

The example is currently hosted on an AWS S3 bucket: http://monty-dawson-weather-app.s3-website.eu-west-2.amazonaws.com/.

It is deployed using the Terraform scripts contained here https://github.com/MontyD/provisioning, deploying the zipped assets from a GitHub release - https://github.com/MontyD/weather-app/releases.
