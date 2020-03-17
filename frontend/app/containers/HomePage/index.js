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
import {makeSelectBills, makeSelectBillLoading, makeSelectBillError} from '../App/selectors';
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
import { loadBill } from '../App/action';


const key = 'home';

export function HomePage({loading, error, bills, onLoad}) {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  const billListProps = {
    loading,
    error,
    bills
  }

  return (
    <div>
      <NavBar onload={onLoad}/>
      <Fragment>
        <FilterList />
        <div className="container-fluid">  
          <BillList />
        </div>
      </Fragment>
    </div>
  );
}


HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  bills: PropTypes.oneOf(PropTypes.bool, PropTypes.array),
  onLoad: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  bills: makeSelectBills(),
  loading: makeSelectBillLoading(),
  error: makeSelectBillError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: evt => dispatch(loadBill()),
  };
}

const withConnect = connect (
  mapStateToProps,
  mapDispatchToProps,
);

export default compose (
  withConnect
)(HomePage);