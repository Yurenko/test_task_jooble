import React from 'react';

const Form = ({ citySearch, getWeather, handleSearch }) => {
  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        placeholder="city"
        name="city"
        value={citySearch}
        onChange={handleSearch}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
