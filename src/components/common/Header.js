import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

Header.propTypes = {};

function Header(props) {
  return (
    <nav>
      <NavLink activeStyle={{ color: 'red' }} to="/" exact>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink activeStyle={{ color: 'red' }} to="/about">
        About
      </NavLink>{' '}
      |{' '}
      <NavLink activeStyle={{ color: 'red' }} to="/courses">
        Courses
      </NavLink>
    </nav>
  );
}

export default Header;
