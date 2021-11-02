import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import weatherReduser from './weatherReduser';

const rootReducer = combineReducers({
  weatherReduser,
});

const middleware = [ReduxThunk];

const enhanter = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhanter));
export default store;
