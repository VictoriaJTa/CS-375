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
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './messages';
import BillList from '../../components/BillList';
import FilterList from '../../components/FilterList';
import reducer from '../App/reducer';
import saga from '../App/saga';
import { loadBill, toggleFilterList, loadMore, loadLess } from '../App/action';
import { Fragment } from 'react';
import NavBar from '../../components/NavBar';


const key = 'global';

export function HomePage({loading, error, bills, onLoadHandler, toggleFilter, filterOpen, onClickHandler, onClickHandlerLess}) {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  const billListProps = {
    loading,
    error,
    bills,
    onClickHandler,
    onClickHandlerLess
  }

  if (bills == false) {
    onLoadHandler();
  }

  return (
    <Fragment>
      <NavBar active="0" />      
      <div className="container-fluid">
        <div className="row filter__applied">
          <i className="material-icons filter__toggle">tune</i>
          {/* Insert filters here */}
        </div>

        <div className="bill__list">
          <BillList {...billListProps} />
        </div>        
      </div>
    </Fragment>
  );
}


HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  bills: PropTypes.any,
  onLoadHandler: PropTypes.func,
  toggleFilter: PropTypes.func,
  filterOpen: PropTypes.bool,
  onClickhandler: PropTypes.func,
  onClickHandlerLess: PropTypes.func,
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
    },
    onClickHandler: evt => {
      dispatch(loadMore());
    },
    onClickHandlerLess: evt => {
      dispatch(loadLess());
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