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
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './messages';
import BillList from '../../components/BillList';
import Filter from '../../components/Filter';
import reducer from '../App/reducer';
import saga from '../App/saga';
import { loadBill } from '../App/action';


const key = 'global';

export function HomePage({loading, error, bills, onLoadHandler}) {
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
    <div className="container-fluid">
        <div className="row filter__applied">
          {/* Insert filters here */}
        </div>

        <div className="bill__list">
          <BillList {...billListProps} />
        </div>        
      </div>
  );
}


HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  bills: PropTypes.any,
  onLoadHandler: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  bills: makeSelectBills(),
  loading: makeSelectBillLoading(),
  error: makeSelectBillError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadHandler: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadBill());
    },
  };
}

const withConnect = connect (
  mapStateToProps,
  mapDispatchToProps,
);

export default compose (
  withConnect
)(HomePage);