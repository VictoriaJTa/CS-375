/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import BillList from '../../components/BillList'
import FilterList from '../../components/FilterList';

export default function HomePage() {
  return (
    <Fragment>
      <FilterList />
      <div className="container-fluid">  
        <BillList />
      </div>
    </Fragment>
  );
}
