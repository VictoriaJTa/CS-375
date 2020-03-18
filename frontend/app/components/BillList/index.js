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
color: purple;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

function BillList({loading, error, bills, toggleItem, onClickHandler, onClickHandlerLess}) {
  if (loading) {
    return <div className="loader"></div>;
  }
  if (bills !== false) {
    return <div>
              <List items={bills} component={Bill}/>
              <Wrapper>
                <Button onClick={onClickHandlerLess}>Previous Page</Button>
                <Button onClick={onClickHandler}>Next Page</Button>
              </Wrapper>
            </div>;
  }

  if (error !== false) {
    return <p className="message">Something Went Wrong</p>;
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
  toggleItem: PropTypes.func,
  onClickHandler: PropTypes.func,
  onClickHandlerLess: PropTypes.func,
};

export default BillList;

