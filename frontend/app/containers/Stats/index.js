/**
 *
 * Stats
 *
 */

import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import BarGraph from '../../components/BarGraph/Loadable';
import PieGraph from '../../components/PieGraph/Loadable';

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import {makeSelectStats, makeSelectError, makeSelectLoading} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import NavBar from '../../components/NavBar';

import {loadStats} from './actions';

export function Stats({stats, onLoadHandler, loading, error}) {
  useInjectReducer({ key: "stat", reducer });
  useInjectSaga({ key: "stat", saga });


  if (stats == false) {
    onLoadHandler();
  }

  useEffect(() => {
    onLoadHandler();
  }, []);

  const barGraphProps = {
    stats,
    loading, 
    error,
  }

  let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  let prevDate = new Date();
  let prevMonth = prevDate.getMonth();
  prevDate.setMonth(prevMonth - 1);
  
  if (prevDate.getMonth == prevMonth) {
    prevDate.setDate(0);
  }

  prevDate.setHours(0, 0, 0);
  prevDate.setMilliseconds(0);

  let month = months[prevMonth];
  let day = prevDate.getDate() + 1;
  day = day < 10 ? `0${day}` : day;
  let year = prevDate.getFullYear();

  console.log(prevDate);

  return (
    <div>
      <NavBar active="1" />    
      <Helmet>
        <title>Bars | Bill Bar</title>
        <meta name="description" content="Description of Stats" />
      </Helmet>
      <div className="container-fluid message message__disclaimer">
        <div className="row">
          <div className="col-12">
            Date Range: {day} {month} {year} to Present
          </div>
        </div>
      </div>
      <div className="container-fluid graph__container">
        <BarGraph {...barGraphProps}/>
        <PieGraph {...barGraphProps}/>
      </div>
    </div>
  );
}

Stats.propTypes = {
  onLoadhandler: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.any,
  stats: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  stats: makeSelectStats(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadHandler: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadStats());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Stats);
