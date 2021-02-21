import React from 'react';
import PropTypes from 'prop-types';

ManageCoursePage.propTypes = {};

function ManageCoursePage(props) {
  return (
    <div>
      <h2>ManageCoursePage</h2>
      {props.match.params.slug}
      {console.log(props)}
    </div>
  );
}

export default ManageCoursePage;
