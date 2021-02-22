import React from 'react';
import PropTypes from 'prop-types';
import HomePage from './HomePage';
import About from './About';
import Header from './common/Header';
import CoursePage from './CoursePage';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import ManageCoursePage from './ManageCoursePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer autoClose={3000} />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursePage} />
        <Route path="/about" component={About} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course/" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      {/*getPage() // -- this is now not required and 
      client side routing can be done using react router dom*/}
    </div>
  );
}

export default AppLogic;
