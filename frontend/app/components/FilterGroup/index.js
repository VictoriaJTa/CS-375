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
        <div className="filter__type">{this.props.name}</div>

        <ul className="filter__group">
          {this.props.filters.map((filter, index) => {
            return <Filter key={index} filter={filter} />
          })}
        </ul> 
      </Fragment>
    );
  }
}