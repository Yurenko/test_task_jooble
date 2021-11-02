import React from 'react';
import style from './Weather.module.css';

const Weather = ({ name, temperature }) => {
  return (
    <div className={style.informWether}>
      {name} (Today)
      {temperature && (
        <> {Math.round((temperature.temp - 273.15) * 100) / 100} &#176;С</>
      )}
    </div>
  );
};

export default Weather;
