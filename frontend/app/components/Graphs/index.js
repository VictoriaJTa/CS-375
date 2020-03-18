/**
 *
 * Graphs
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";

function Graphs({loading, error, graphs}) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Graphs.propTypes = {

};

export default Graphs;
