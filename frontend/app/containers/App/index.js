/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Stats from 'containers/Stats/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import FilterList from '../../components/FilterList';
import Header from '../../components/Header';

import '../../styles/styles.css';

export default function App() {
  return (
    <div> 
      <Header />     
      <FilterList />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/stats" component={Stats}/>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
