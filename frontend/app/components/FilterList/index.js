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
          filters: [ 'Republican', 'Democratic', 'Independent' ]
        },
        {
          name: 'chamber',
          filters: [ 'H.R. (House)', 'Senate' ]
        }
      ]
    };
  }

  render () {
    return (
      <div className="filter__list">
          {/* <div className="filter__overlay"></div> */}
          <div className="filter__menu">
            <div className="filter__title">
              <span>Filter</span>
              <i className="material-icons">close</i>
            </div>

            <div className="filter__date">
              <div className="row no-gutters date--start">
                <div className="col-3">From</div>
                <div className="col-9" id="filter-start">03 March 2020</div>
                <i className="material-icons">calendar_today</i>
              </div>
              <div className="row no-gutters date--end">
                <div className="col-3">To</div>
                <div className="col-9"  id="filter-end"></div>
                <i className="material-icons">calendar_today</i>
              </div>
            </div>

            {this.state.filters.map((value, index) => {       
              return <FilterGroup key={index} name={value.name} filters={value.filters} />
            })}
          </div>
        </div>
    );
  }
}