import React from 'react'
import FilterGroup from '../FilterGroup'

export default class FilterList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filters: [
        {
          name: 'status',
          filters: [ 'introduced', 'active', 'passed', 'enacted', 'vetoed' ]
        },
        {
          name: 'party',
          filters: [ 'Republican', 'Democrat', 'Independent' ]
        },
        {
          name: 'chamber',
          filters: [ 'House of Representatives', 'Senate' ]
        }
      ]
    };
  }

  render () {
    return (
      this.state.filters.map((value, index) => {       
        return <FilterGroup key={index} name={value.name} filters={value.filters} />
      })
    );
  }
}