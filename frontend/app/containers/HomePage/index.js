/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {makeSelectBills, makeSelectBillLoading, makeSelectBillError, makeSelectFilter} from '../App/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './messages';
import BillList from '../../components/BillList'
import FilterList from '../../components/FilterList';
import NavBar from '../../components/NavBar';
import reducer from '../App/reducer';
import saga from '../App/saga';
import { loadBill, toggleFilterList } from '../App/action';


const key = 'global';

export function HomePage({loading, error, bills, onLoadHandler, toggleFilter, filterOpen}) {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  const billListProps = {
    loading,
    error,
    bills
  }

  if (bills == false) {
    onLoadHandler();
  }

  return (
    <div>
      <Fragment>
        <FilterList/>
        <div className="container-fluid">  
          <BillList {...billListProps}/>
        </div>
      </Fragment>
    </div>
  );
}


HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  bills: PropTypes.any,
  onLoadHandler: PropTypes.func,
  toggleFilter: PropTypes.func,
  filterOpen: PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
  bills: makeSelectBills(),
  loading: makeSelectBillLoading(),
  error: makeSelectBillError(),
  filterOpen: makeSelectFilter(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadHandler: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadBill());
    },
    toggleFilter: evt => {
      if (evt !== undefined && evt.preventDeafult) evt.preventDeafult();
      dispatch(toggleFilterList);
    }
  };
}

const withConnect = connect (
  mapStateToProps,
  mapDispatchToProps,
);

export default compose (
  withConnect
)(HomePage);