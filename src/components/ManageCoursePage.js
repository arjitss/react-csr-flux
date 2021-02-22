import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';
import CourseForm from './CourseForm';

ManageCoursePage.propTypes = {};

function ManageCoursePage(props) {
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null,
    category: '',
  });

  const onTitleChange = (e) => {
    debugger;
    const updatedCourse = { ...course, title: e.target.value };
    setCourse(updatedCourse);
  };
  return (
    <div className="container">
      <h2>ManageCoursePage</h2>
      <CourseForm course={course} onTitleChange={onTitleChange} />
      <Prompt when={true} message="Are you sure ?" />
      {console.log(props)}
    </div>
  );
}

export default ManageCoursePage;
