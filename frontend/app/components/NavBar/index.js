/**
 *
 * NavBar
 *
 */

import React, { memo } from "react";
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from "react-router-dom";
function NavBar({active}) {

  const links = [
    {
      path: "/",
      text: "Bill"
    },
    {
      path: "/stats",
      text: "Stats"
    }
  ];

  // Create list of links and set active according to prop passed in
  const generatedLinks = [];
  for (let i=0; i<links.length; i++) {
    let link = links[i];
    
    if (i == active) {
      generatedLinks.push(<Link to={link.path} className="col-6 tab active">{link.text}</Link>);
    } else {
      generatedLinks.push(<Link to={link.path} className="col-6 tab">{link.text}</Link>);
    }
  }

  return (
    <nav>
      <div className="row tabs">
        {generatedLinks.map((link) => {
          return link;
        })}
      </div>
    </nav>
  );
}

export default memo(NavBar);
