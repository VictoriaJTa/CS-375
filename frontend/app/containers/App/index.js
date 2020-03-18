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
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../styles/styles.css';

export default function App() {
  return (
    <div> 
      <Header />              
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/bars" component={Stats}/>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <Footer />   
    </div>
  );
}
