import React from 'react';
import style from './HistorySearch.module.css';

const HistorySearchItem = ({ item, handleClick }) => {
  return (
    <button
      type="button"
      className={style.button}
      onClick={() => handleClick(item.id)}
    >
      {item.citySearch}
    </button>
  );
};

export default HistorySearchItem;
