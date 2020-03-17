import React from 'react'
import Filter from '../Filter'
import { Fragment } from 'react'

export default class FilterList extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Fragment>
        <div>{this.props.name}</div>

        <ul className="filter__list">
          {this.props.filters.map((filter, index) => {
            return <Filter key={index} filter={filter} />
          })}
        </ul> 
      </Fragment>
    );
  }
}