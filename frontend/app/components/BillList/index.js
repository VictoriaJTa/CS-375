/**
 *
 * BillList
 *
 */

import React, { memo } from "react";
import PropTypes from 'prop-types';
import Bill from "../Bill";
// import styled from 'styled-components';

function BillList({loading, error, bills}) {
  console.log(loading);
  if (loading) {
    return <p>Loading 99%...</p>;
  }

  if (error !== false) {
    return <p>Something Went Wrong</p>;
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
