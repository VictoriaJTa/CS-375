import React from 'react'

function Filter({filter, toggleItem}) {
  return (
    <li className="filter" onClick={toggleItem}>
      <span>{filter}</span>
      <i className="material-icons">close</i>
    </li>
  );
}

export default Filter;