import React from 'react';
import PropTypes from 'prop-types';
import HomePage from './HomePage';
import About from './About';
import Header from './common/Header';
import CoursePage from './CoursePage';

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
      {getPage()}
    </div>
  );
}

export default AppLogic;
