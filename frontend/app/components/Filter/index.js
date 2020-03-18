import React from 'react'

export default class FilterList extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <li className="filter active">
        <span>{this.props.filter}</span>
        <i className="material-icons">close</i>
      </li>
    );
  }
}