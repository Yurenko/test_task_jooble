import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { featchWeathersForFiveDays } from '../../redux/weatherOptions';
import WeatherForFiveDaysItems from './WeatherForFiveDaysItems';

const WeatherForFiveDay = () => {
  const [workingFiveDays, setWorkingFiveDays] = useState([]);
  const workingDays = useSelector(state => state.weatherReduser.workingDays);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchWeathersForFiveDays('Kyiv'))
      .then(() => {
        const filterWorkingDays = workingDays.filter(reading =>
          reading.dt_txt.includes('12:00:00'),
        );
        setWorkingFiveDays(filterWorkingDays);
      })
      .catch(errorMassage => {
        alert(errorMassage);
      });
  }, []);

  return (
    <div>
      {workingFiveDays &&
        workingFiveDays.map(item => (
          <WeatherForFiveDaysItems key={item} item={item} />
        ))}
    </div>
  );
};

export default WeatherForFiveDay;
