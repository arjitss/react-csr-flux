import React from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';

ManageCoursePage.propTypes = {};

function ManageCoursePage(props) {
  return (
    <div>
      <h2>ManageCoursePage</h2>
      <Prompt when={true} message="Are you sure ?" />
      {props.match.params.slug}

      {console.log(props)}
    </div>
  );
}

export default ManageCoursePage;
