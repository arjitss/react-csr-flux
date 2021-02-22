import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';

ManageCoursePage.propTypes = {};

function ManageCoursePage(props) {
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null,
    category: '',
  });

  //   const onTitleChange = (e) => {
  //     debugger;
  //     const updatedCourse = { ...course, title: e.target.value };
  //     setCourse(updatedCourse);
  //   };
  const handleChange = (e) => {
    // debugger;
    const updatedCourse = { ...course, [e.target.name]: e.target.value };
    setCourse(updatedCourse);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(course);
    courseApi.saveCourse(course).then(() => {
      props.history.push('/courses');
    });
  };
  return (
    <div className="container">
      <h2>ManageCoursePage</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Prompt when={true} message="Are you sure ?" />
      {console.log(props)}
    </div>
  );
}

export default ManageCoursePage;
