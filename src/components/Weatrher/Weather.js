import React from 'react';
import style from './Weather.module.css';

const Weather = ({ name, temperature, error }) => {
  return (
    <div className={style.informWeather}>
      {error && <div>{error}</div>}
      {name && (
        <div>
          {name} (Today) {Math.round((temperature.temp - 273.15) * 100) / 100}{' '}
          &#176;С
        </div>
      )}
    </div>
  );
};

export default Weather;
