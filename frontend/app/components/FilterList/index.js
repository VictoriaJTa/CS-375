/**
 *
 * FilterList
 *
 */

import React from "react";
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import FilterGroup from '../FilterGroup';


function FilterList({visible, toggleFilterHandler, toggleItem}) {
  const stuff = {
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
  if (visible == true) {
    return (<div className="filter__list">
            <div onClick={toggleFilterHandler} className="filter__overlay"></div>
            <div className="filter__menu">
              <div className="filter__title">
                <span>Filter</span>
                <button onClick={toggleFilterHandler} className="material-icons">close</button>
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

              {stuff.filters.map((value, index) => {       
                return <FilterGroup key={index} name={value.name} filters={value.filters} toggleItem={toggleItem}/>
              })}
            </div>
          </div>);
  } else {
    return null;
  }
}

FilterList.propTypes = {
  visible: PropTypes.bool,
  toggleFilterHandler: PropTypes.func,
  toggleItem: PropTypes.func,
};

export default FilterList;
