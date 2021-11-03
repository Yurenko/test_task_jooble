import {
  featchWeatherError,
  featchWeatherForFiveDays,
  featchWeatherSuccess,
  loadingWeather,
} from './weatherActions';

const APIKEY = '17009a21e213f47c6745fb2f43f22fe7';

const featchWeathers = city => async dispatch => {
  dispatch(loadingWeather(true));
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`,
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
export default featchWeathers;

export const featchWeathersForFiveDays = city => async dispatch => {
  dispatch(loadingWeather(true));
  await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`,
  )
    .then(res => res.json())
    .then(data => dispatch(featchWeatherForFiveDays(data.list)));

  dispatch(loadingWeather(false));
};
