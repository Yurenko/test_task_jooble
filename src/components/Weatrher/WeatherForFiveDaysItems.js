import React from 'react';
import style from './WeatherForFiveDays.module.css';

const WeatherForFiveDaysItems = ({ item }) => {
  const ms = item.dt * 1000;
  const weekdayName = new Date(ms).toLocaleString('en', { weekday: 'long' });
  const newStr = weekdayName[0].toUpperCase() + weekdayName.slice(1);
  const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

  return (
    <div className={style.weatherCardItem}>
      <h2 className={style.day}>{newStr}</h2>
      <div className={style.temperature}>
        {Math.round((item.main.temp - 273.15) * 100) / 100} &#176;С
      </div>
      <img src={icon} alt="icon" />
      <div>{item.weather[0].description}</div>
    </div>
  );
};

export default WeatherForFiveDaysItems;
