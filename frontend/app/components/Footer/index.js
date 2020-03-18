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
        <div className="col-12">
          <span className="footer__copyright">CS-375-003 &copy;2020</span>
          <p className="footer__credits">
            <span>David Debellis<span>,</span></span> 
            <span>Giang Dong<span>,</span></span> 
            <span>Hunter Heidenreich<span>,</span></span> 
            <span>Victoria Ta</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
