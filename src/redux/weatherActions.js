export const ActionsType = {
  WEATHER_FEATCH_START: 'WEATHER_FEATCH_START',
  WEATHER_FEATCH_SUCCESS: 'WEATHER_FEATCH_SUCCESS',
  WEATHER_LOADING: 'WEATHER_LOADING',
};

export const featchWeatherStart = () => ({
  type: ActionsType.WEATHER_FEATCH_START,
});

export const featchWeatherSuccess = data => ({
  type: ActionsType.WEATHER_FEATCH_SUCCESS,
  payload: data,
});

export const loadingWeather = isLoading => ({
  type: ActionsType.WEATHER_LOADING,
  payload: isLoading,
});
