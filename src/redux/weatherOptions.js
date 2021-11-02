import { featchWeatherSuccess, loadingWeather } from './weatherActions';

const APIKEY = '17009a21e213f47c6745fb2f43f22fe7';

const featchWeathers = city => async dispatch => {
  try {
    dispatch(loadingWeather(true));
    const APIdata = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`,
    )
      .then(res => res.json())
      .then(data => data);
    dispatch(loadingWeather(false));
    dispatch(featchWeatherSuccess(APIdata));
  } catch (error) {
    alert(error);
  }
};
export default featchWeathers;
