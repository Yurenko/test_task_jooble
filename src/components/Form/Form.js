import React from 'react';
import style from './Form.module.css';

const Form = ({ citySearch, getWeather, handleSearch }) => {
  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        placeholder="
        Enter the city"
        name="city"
        value={citySearch}
        onChange={handleSearch}
        className={style.input}
      />
      <button type="submit" className={style.button}>
        Submit
      </button>
    </form>
  );
};

export default Form;
