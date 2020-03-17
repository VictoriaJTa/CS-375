/**
 *
 * NavBar
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {Link} from 'react-router-dom';
function NavBar() {
  return (
    <div>
      <Link to="bills">
      Bill
    </Link>
    <Link to="stats">
      Stats
    </Link>
    </div>
  );
}


export default memo(NavBar);
