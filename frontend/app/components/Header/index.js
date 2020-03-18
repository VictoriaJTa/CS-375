/**
 *
 * Header
 *
 */

import React from "react";
import NavBar from "../NavBar";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header({toggleSideBar}) {
  return (
    <header className="container-fluid">
      <div className="row header__title">
        <div className="col-12">
        <h1>Bill Bar</h1>
        <i className="material-icons header__filter">tune</i>
        </div>
      </div>

      <NavBar />
    </header>    
  );
}

Header.propTypes = {
  toggleSideBar: PropTypes.func,
}

export default Header;
