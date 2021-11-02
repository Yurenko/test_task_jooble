import React from 'react';

const Form = ({ getWeather }) => {
  return (
    <form onSubmit={getWeather}>
      <input type="text" placeholder="city" name="city" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
