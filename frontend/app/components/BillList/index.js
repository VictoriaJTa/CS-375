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

function BillList({loading, error, bills, onClickHandler, onClickHandlerLess}) {
  if (bills !== false) {
    return <div>
              <List items={bills} component={Bill}/>
              <Wrapper>
                <Button onClick={onClickHandlerLess}>Previous Page</Button>
                <Button onClick={onClickHandler}>Next Page</Button>
              </Wrapper>
            </div>;
  }

  if (loading) {
    return <p>Loading 99%...</p>;
  }

  if (error !== false) {
    return <p>Something Went Wrong</p>;
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

