import React from 'react'
import Filter from '../Filter'
import { Fragment } from 'react'

function FilterList({name, filters}) {
  return (
    <Fragment>
      <div className="filter__type">{name}</div>

      <ul className="filter__group">
        {filters.map((filter, index) => {
          return <Filter key={index} filter={filter}/>
        })}
      </ul>
    </Fragment>
  );
}

export default FilterList;