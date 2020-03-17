import React from 'react'

export default class FilterList extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return <li className="filter">{this.props.filter}</li>;
  }
}