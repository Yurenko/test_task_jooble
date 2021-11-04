import {
  featchWeatherError,
  featchWeatherForFiveDays,
  featchWeatherSuccess,
  loadingWeather,
} from './weatherActions';

const APIKEY = '17009a21e213f47c6745fb2f43f22fe7';

export const featchWeathers = city => async dispatch => {
  dispatch(loadingWeather(true));
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=celsius&APPID=${APIKEY}`,
  )
    .then(res => res.json())
    .then(data => {
      if (data.cod === 200) {
        dispatch(featchWeatherSuccess(data));
      } else {
        dispatch(featchWeatherError(data.message));
        throw new Error(data.message);
      }
    })
    .finally(() => {
      dispatch(loadingWeather(false));
    });
};

export const featchWeathersForFiveDays = city => async dispatch => {
  dispatch(loadingWeather(true));
  await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`,
  )
    .then(res => res.json())
    .then(data =>
      data.list.filter(reading => reading.dt_txt.includes('12:00:00')),
    )
    .then(data => dispatch(featchWeatherForFiveDays(data)));
  dispatch(loadingWeather(false));
};
