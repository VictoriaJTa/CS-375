/**
 *
 * BillList
 *
 */

import React, { memo } from "react";
import PropTypes from 'prop-types';
import Bill from "../Bill";
import List from "../List";
// import styled from 'styled-components';

function BillList({loading, error, bills}) {
  if (loading) {
    return <div className="loader"></div>;
  }

  if (error !== false) {
    return <p className="message">Something Went Wrong</p>;
  }

  if (bills !== false) {
    return <List items={bills} component={Bill}/>;
  } else {
    return null;
  }

}

BillList.propTypes = {
  bills: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.any,
};

export default BillList;
