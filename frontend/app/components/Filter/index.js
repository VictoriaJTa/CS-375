import React from 'react'

import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

function Filter({filter, toggleItem}) {
  return (
    <li className="filter" onClick={toggleItem}>
      <span>{filter}</span>
      <i className="material-icons">close</i>
    </li>
  );
}

Filter.propTypes = {
  toggleItem: PropTypes.func,
}

export function mapDispatchToProps(dispatch) {
  return {
    toggleItem: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      
      let target = evt.target.closest('.filter');
      
      if (target.classList.contains('active')) {
        target.classList.remove('active');
      } else {
        target.classList.add('active');
      }
    },
  };
}

const withConnect = connect (
  mapDispatchToProps,
);

export default compose (
  withConnect
)(Filter);