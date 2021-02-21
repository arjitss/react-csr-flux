import React from 'react';
import PropTypes from 'prop-types';
import HomePage from './HomePage';
import About from './About';
import Header from './common/Header';
import CoursePage from './CoursePage';
import { Route } from 'react-router-dom';

AppLogic.propTypes = {};

function AppLogic(props) {
  const getPage = function () {
    const route = window.location.pathname;
    if (route === '/about') {
      return <About />;
    }
    if (route === '/courses') {
      return <CoursePage />;
    } else {
      return <HomePage />;
    }
  };
  return (
    <div>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/courses" component={CoursePage} />
      <Route path="/about" component={About} />
      {/*getPage() // -- this is now not required and 
      client side routing can be done using react router dom*/}
    </div>
  );
}

export default AppLogic;
