import React from 'react';
import style from './HistorySearch.module.css';
import HistorySearchItem from './HistorySearchItem';

const HistorySearch = ({ lastHistorySearch, handleClick }) => {
  return (
    <div className={style.blockHistory}>
      <h2>Last {lastHistorySearch.length} queries</h2>
      {lastHistorySearch.length > 0 &&
        lastHistorySearch
          .map(item => (
            <HistorySearchItem
              key={item.id}
              item={item}
              handleClick={handleClick}
            />
          ))
          .reverse()}
    </div>
  );
};

export default HistorySearch;
