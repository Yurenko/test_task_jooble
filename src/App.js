import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from './components/Form/Form';
import Weather from './components/Weatrher/Weather';
import {
  featchWeathers,
  featchWeathersForFiveDays,
} from './redux/weatherOptions';
import Loader from './components/Loader/Loader';
import style from './App.module.css';
import HistorySearch from './components/HistorySearch/HistorySearch';
import WeatherForFiveDay from './components/Weatrher/WeatherForFiveDays';

function App() {
  const [citySearch, setCitySearch] = useState('');
  const [lastHistorySearch, setLastHistorySearch] = useState([]);
  const isLoading = useSelector(state => state.weatherReduser.isLoading);
  const weather = useSelector(state => state.weatherReduser.data);
  const error = useSelector(state => state.weatherReduser.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchWeathers('Kyiv'));
    const item = localStorage.getItem('HistorySearchWeather');
    if (item) {
      const initialValue = JSON.parse(item);
      setLastHistorySearch(initialValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'HistorySearchWeather',
      JSON.stringify(lastHistorySearch),
    );
  }, [lastHistorySearch]);

  const fetchData = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    dispatch(featchWeathers(city))
      .then(() => {
        const newElement = {
          id: new Date(),
          citySearch,
        };

        if (lastHistorySearch.length === 10) {
          lastHistorySearch.shift();
        }
        setLastHistorySearch(oldArray => [...oldArray, newElement]);
        dispatch(featchWeathersForFiveDays(citySearch));
        setCitySearch('');
      })
      .catch(errorMassage => {
        alert(errorMassage);
        setCitySearch('');
      });
  };

  const handleSearch = e => {
    setCitySearch(e.target.value);
  };

  const handleClick = id => {
    const cityFind = lastHistorySearch.find(item => item.id === id);
    dispatch(featchWeathers(cityFind.citySearch));
    dispatch(featchWeathersForFiveDays(cityFind.citySearch));
  };

  return (
    <div className={style.app}>
      <div className={style.header}>
        <div>
          <h1>Weather Forecast</h1>
          <Form
            citySearch={citySearch}
            getWeather={fetchData}
            handleSearch={handleSearch}
          />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <Weather
            name={weather.name}
            temperature={weather.main}
            error={error}
          />
        )}
      </div>
      <HistorySearch
        lastHistorySearch={lastHistorySearch}
        handleClick={handleClick}
      />
      {!error && <WeatherForFiveDay />}
    </div>
  );
}

export default App;
