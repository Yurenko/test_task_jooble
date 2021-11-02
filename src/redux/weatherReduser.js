import { ActionsType } from './weatherActions';

const initialState = {
  data: {},
  isLoading: false,
};

const weatherReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsType.WEATHER_FEATCH_START:
      return undefined;
    case ActionsType.WEATHER_FEATCH_SUCCESS:
      return { ...state, data: payload };
    case ActionsType.WEATHER_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};

export default weatherReduser;
