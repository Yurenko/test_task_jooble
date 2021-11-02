import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from './components/Form/Form';
import Weather from './components/Weatrher/Weather';
import featchWeathers from './redux/weatherOptions';
import Loader from './components/Loader/Loader';
import { loadingWeather } from './redux/weatherActions';
import style from './App.module.css';

function App() {
  const isLoading = useSelector(state => state.weatherReduser.isLoading);
  const weather = useSelector(state => state.weatherReduser.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingWeather(true));
    dispatch(featchWeathers('Kyiv'));
    dispatch(loadingWeather(false));
  }, []);

  const fetchData = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    dispatch(featchWeathers(city));
    e.target.elements.city.value = '';
  };

  return (
    <div className={style.header}>
      <div>
        <h3>Weather Forecast</h3>
        <Form getWeather={fetchData} />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <Weather name={weather.name} temperature={weather.main} />
      )}
    </div>
  );
}

export default App;
