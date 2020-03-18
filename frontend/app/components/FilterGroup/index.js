import React from 'react'
import Filter from '../Filter'
import { Fragment } from 'react'
import PropTypes from 'prop-types';

function FilterGroup({name, filters, toggleItem}) {
  return (
    <Fragment>
      <div className="filter__type">{name}</div>

      <ul className="filter__group">
        {filters.map((filter, index) => {
          return <Filter key={index} filter={filter} toggleItem={toggleItem}/>
        })}
      </ul>
    </Fragment>
  );
}

FilterGroup.propTypes = {
  toggleItem: PropTypes.func,
  filters: PropTypes.any,
  name: PropTypes.string,
}

export default FilterGroup;