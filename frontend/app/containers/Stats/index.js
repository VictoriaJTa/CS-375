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

import BillList from '../../components/BillList';
//import Graphs from '../../components/'

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectStats from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

export function Stats({loading, error, bills, onLoadHandler}) {
  useInjectReducer({ key: "stats", reducer });
  useInjectSaga({ key: "stats", saga });

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
      <Helmet>
        <title>Stats</title>
        <meta name="description" content="Description of Stats" />
      </Helmet>
      <div>
        <p>Hello</p>
        <BillList {...billListProps} />
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
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)
  (Stats);
