/**
 *
 * Bill
 *
 */

import React from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
// import styled from 'styled-components';

function Bill({item, toggleItem}) {
  const bill = item;
  let d = new Date(bill.last_vote);
  
  return (
    <div className="row no-gutters">
      <div className="col-12 bill">
        <div className="bill__content">
          <div className="bill__header">
            <h3 className="row bill__title">
              <span className="col-12 col-md-2 title__code">{bill.bill}</span>
              <span className="col-12 col-md-10 title">{bill.short_title}</span>
            </h3>
            <p className="bill__summary">{bill.summary}</p>
          </div>

          <div className="bill__vote">
            <span>Last Vote</span>
            <span>{d.toDateString()}</span>
          </div>

          <div className="bill__link">
            <a href={bill.congress_gov_uri} target="_blank">
              <span className="link__text">More information on Congress.gov</span> 
              <i className="material-icons">call_made</i>
            </a>
          </div>

          <div className="row no-gutters bill__details">
            <div className="col-6 col-md-5 detail">
              <span className="detail__label">Sponsor</span>
              <span className="detail__value">{bill.sponsor_first_name} {bill.sponosor_last_name}</span>
            </div>

            <div className="col-6 col-md-2 detail">
              <span className="detail__label">State</span>
              <span className="detail__value">{bill.sponsor_state}</span>
            </div>

            <div className="col-6 col-md-2 detail">
              <span className="detail__label">Party</span>
              <span className="detail__value">{bill.sponsor_party}</span>

            </div>

            <div className="col-6 col-md-3 detail">
              <span className="detail__label">Chamber</span>
              <span className="detail__value">{bill.chamber.charAt(0).toUpperCase() + bill.chamber.slice(1)}</span>
            </div>        
          </div>
        </div>

        <div className="bill__expand">
          <div className="expand__fade"></div>
          <div className="expand__content" onClick={toggleItem}>
            <div className="expand__inactive">
              <i className="material-icons">arrow_drop_down</i> 
              <span>Expand</span>
            </div>     

            <div className="expand__active">
              <i className="material-icons">arrow_drop_up</i> 
              <span>Collapse</span>
            </div>       
          </div>
        </div>
      </div>      
    </div>
  );
  
}

Bill.propTypes = {
  item: PropTypes.object,
  toggleItem: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    toggleItem: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();

      const target = evt.target;
      let expand = target.closest('.expand__content');
      let content = expand.parentNode.previousSibling;

      if (expand.classList.contains('active')) {
        expand.classList.remove('active');
        content.classList.remove('active');
      } else {
        expand.classList.add('active');
        content.classList.add('active');
      }
    },
  };
}

const withConnect = connect (
  mapDispatchToProps,
);

export default compose (
  withConnect
)(Bill);