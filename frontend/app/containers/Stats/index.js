/**
 *
 * Stats
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectStats from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import NavBar from '../../components/NavBar';

import {loadStats} from './actions';

export function Stats({stats, onLoadHandler}) {
  useInjectReducer({ key: "stats", reducer });
  useInjectSaga({ key: "stats", saga });

  if (stats.stats == false) {
    onLoadHandler();
  }

  console.log(stats);

  return (
    <div>
      <NavBar active="1" />    
      <Helmet>
        <title>Stats</title>
        <meta name="description" content="Description of Stats" />
      </Helmet>
      <div>
        
      </div>
    </div>
  );
}

Stats.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  stats: makeSelectStats()
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadHandler: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadStats());
    },
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Stats);
