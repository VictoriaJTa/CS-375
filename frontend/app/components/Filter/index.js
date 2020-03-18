import React from 'react'

function FilterList({filter}) {
  return (
    <li className="filter">
      <span>{filter}</span>
      <i className="material-icons">close</i>
    </li>
  );
}

export default FilterList;