import { ActionsType } from './weatherActions';

const initialState = {
  data: {
    name: '',
    temperature: null,
  },
  isLoading: false,
  error: '',
  weatherOnWeekdays: [],
};

const weatherReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsType.WEATHER_FEATCH_START:
      return undefined;
    case ActionsType.WEATHER_FEATCH_SUCCESS:
      return { ...state, data: payload, error: '' };
    case ActionsType.WEATHER_FEATCH_ERROR:
      return { ...state, data: {}, error: payload };
    case ActionsType.WEATHER_LOADING:
      return { ...state, isLoading: payload };
    case ActionsType.WEATHER_FEATCH_FOR_FIVE_DAYS:
      return { ...state, error: '', weatherOnWeekdays: payload };
    default:
      return state;
  }
};

export default weatherReduser;
