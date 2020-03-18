/**
 *
 * Footer
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function Footer() {
  return (
    <footer>
      <div className="row no-gutters">
        <div className="col-6 col-md-12 footer__copyright">
          <span>CS-375-003 &copy;2020</span>
          <span>Winter 2019-2020</span>          
        </div>
        <div className="col-6 col-md-12 footer__credits">
          <span>David Debellis<span>,</span></span> 
          <span>Giang Doan<span>,</span></span> 
          <span>Hunter Heidenreich<span>,</span></span> 
          <span>Victoria Ta</span>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
