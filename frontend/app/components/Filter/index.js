import React from 'react'
import PropTypes from 'prop-types'

function Filter({filter, toggleItem}) {
  return (
    <li className="filter" value={filter.value} onClick={toggleItem}>
      <span>{filter.key}</span>
      <i className="material-icons">close</i>
    </li>
  );
}

Filter.propTypes = {
  toggleItem: PropTypes.func,
}


export default Filter
