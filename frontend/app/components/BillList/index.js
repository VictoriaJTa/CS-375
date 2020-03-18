/**
 *
 * BillList
 *
 */

import React, { memo } from "react";
import PropTypes from 'prop-types';
import Bill from "../Bill";
import List from "../List";
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  background: transparent;
  border: none;
  outline: none;  
`;

const Wrapper = styled.div`
  padding-bottom: 2rem;
`;

function BillList({loading, error, bills, onClickHandler, onClickHandlerLess}) {
  if (loading) {
    return <div className="loader"></div>;
  }
  if (bills !== false) {
    return <div>
              <List items={bills} component={Bill} />
              <Wrapper className="row no-gutters pagination">
                <div className="col-6">
                  <Button onClick={onClickHandlerLess}>
                    <i className="material-icons">arrow_left</i>
                    <span>Previous Page</span>
                  </Button>
                </div>

                <div className="col-6">
                  <Button onClick={onClickHandler}>                  
                    <span>Next Page</span>
                    <i className="material-icons">arrow_right</i>
                  </Button>
                </div>
              </Wrapper>
            </div>;
  }

  if (error !== false) {
    return <p className="message">Hm...something went wrong. Please try again later.</p>;
  }

  if (bills !== false) {    
    return <List items={bills} component={Bill} toggleItem={toggleItem} />;
  } else {
    return null;
  }

}

BillList.propTypes = {
  bills: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.any,
  onClickHandler: PropTypes.func,
  onClickHandlerLess: PropTypes.func,
};

export default BillList;

