/**
 *
 * Header
 *
 */

import React from "react";
import NavBar from "../NavBar";
import Sidebar from "react-sidebar";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: true
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  
  render() {
    return (
      <header className="container-fluid">
        <Sidebar
          sidebar={<FilterList />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}>
        </Sidebar>       

        <div className="row header__title">
          <div className="col-12">
          <h1>Bill Bar</h1>
          <button onClick={() => this.onSetSidebarOpen(true)}>
            <i className="material-icons header__filter">tune</i>
          </button>
          </div>
        </div>
  
        <NavBar />
      </header>    
    );
  }
}


export default Header;
