/**
 *
 * NavBar
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="row tabs">
      <Link to="/" className="col-6 tab active">Bill</Link>
      <Link to="/stats" className="col-6 tab">Stats</Link>
    </div>
  );
}

export default memo(NavBar);
