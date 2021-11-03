export const ActionsType = {
  WEATHER_FEATCH_START: 'WEATHER_FEATCH_START',
  WEATHER_FEATCH_SUCCESS: 'WEATHER_FEATCH_SUCCESS',
  WEATHER_FEATCH_ERROR: 'WEATHER_FEATCH_ERROR',
  WEATHER_LOADING: 'WEATHER_LOADING',
  WEATHER_FEATCH_FOR_FIVE_DAYS: 'WEATHER_FEATCH_FOR_FIVE_DAYS',
};

export const featchWeatherStart = () => ({
  type: ActionsType.WEATHER_FEATCH_START,
});

export const featchWeatherSuccess = data => ({
  type: ActionsType.WEATHER_FEATCH_SUCCESS,
  payload: data,
});

export const featchWeatherError = error => ({
  type: ActionsType.WEATHER_FEATCH_ERROR,
  payload: error,
});

export const loadingWeather = isLoading => ({
  type: ActionsType.WEATHER_LOADING,
  payload: isLoading,
});

export const featchWeatherForFiveDays = data => ({
  type: ActionsType.WEATHER_FEATCH_FOR_FIVE_DAYS,
  payload: data,
});
