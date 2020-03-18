/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from "react-helmet";
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
import FilterList from '../../components/FilterList/Loadable';
import reducer from '../App/reducer';
import saga from '../App/saga';
import { loadBill, toggleFilter, loadMore, loadLess } from '../App/action';

import { Fragment } from 'react';
import NavBar from '../../components/NavBar';
import styled from 'styled-components';


const key = 'global';

const Button = styled.button`

`

export function HomePage({loading, error, bills, onLoadHandler, toggleItem, toggleFilterHandler, onClickHandler, onClickHandlerLess, visible}) {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  const billListProps = {
    loading,
    error,
    bills,
    toggleItem,
    onClickHandler,
    onClickHandlerLess,
  }

  const filterProps = {
    visible,
  }

  if (bills == false) {
    onLoadHandler();
  }

  return (
    <div>
        <Helmet>
          <title>Bills</title>
          <meta name="description" content="Description of Bills" />
        </Helmet>
      <Fragment>
        <FilterList {...filterProps}/>
        <NavBar active="0" />      
        <div className="container-fluid">
          <div className="row filter__applied">
            <Button onClick={toggleFilterHandler} className="material-icons filter__toggle">tune</Button>
            {/* Insert filters here */}
          </div>

          <div className="bill__list">
            <BillList {...billListProps} />
          </div>        
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
  toggleItem: PropTypes.func,
  toggleFilterHandler: PropTypes.func,
  onClickhandler: PropTypes.func,
  onClickHandlerLess: PropTypes.func,
  visible: PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
  bills: makeSelectBills(),
  loading: makeSelectBillLoading(),
  error: makeSelectBillError(),
  visible: makeSelectFilter(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadHandler: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadBill());
    },
    toggleItem: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      
      const target = evt.target;
      let expand = target.closest('.expand__content');
      console.log(expand);
    },
    toggleFilterHandler: evt => {
      if (evt !== undefined && evt.preventDeafult) evt.preventDeafult();
      dispatch(toggleFilter());
    },
    onClickHandler: evt => {
      dispatch(loadMore());
      window.scrollTo(0, 0);
    },
    onClickHandlerLess: evt => {
      dispatch(loadLess());
      window.scrollTo(0, 0);
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