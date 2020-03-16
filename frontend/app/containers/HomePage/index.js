/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import BillList from '../../components/BillList'

export default function HomePage() {
  return (
    <div>
      <BillList />
    </div>
  );
}
