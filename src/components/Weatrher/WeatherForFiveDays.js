import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { featchWeathersForFiveDays } from '../../redux/weatherOptions';
import WeatherForFiveDaysItems from './WeatherForFiveDaysItems';
import style from './WeatherForFiveDays.module.css';

const WeatherForFiveDay = () => {
  const weatherOnWeekdays = useSelector(
    state => state.weatherReduser.weatherOnWeekdays,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchWeathersForFiveDays('Kyiv')).catch(errorMassage => {
      alert(errorMassage);
    });
  }, []);

  return (
    <div className={style.weatherOnWeekdays}>
      {weatherOnWeekdays &&
        weatherOnWeekdays.map(item => (
          <WeatherForFiveDaysItems key={item.dt} item={item} />
        ))}
    </div>
  );
};

export default WeatherForFiveDay;
