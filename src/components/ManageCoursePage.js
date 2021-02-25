import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';
import { toast } from 'react-toastify';
import courseStore from '../stores/courseStore';
import * as courseActions from '../actions/courseAction';

ManageCoursePage.propTypes = {};

function ManageCoursePage(props) {
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null,
    category: '',
  });
  const [error, setError] = useState({});

  //   const onTitleChange = (e) => {
  //     debugger;
  //     const updatedCourse = { ...course, title: e.target.value };
  //     setCourse(updatedCourse);
  //   };
  useEffect(() => {
    const slug = props.match.params.slug; // passed by react router
    console.log(slug);
    if (slug) {
      //   courseApi.getCourseBySlug(slug).then((_course) => {
      //     setCourse(_course);
      //   });
      setCourse(courseStore.getCourseBySlug(slug));
    }
  }, [props.match.params.slug]);
  const handleChange = (e) => {
    // debugger;
    const updatedCourse = { ...course, [e.target.name]: e.target.value };
    const updatedError = { ...error, [e.target.name]: '' };
    setCourse(updatedCourse);
    setError(updatedError);
  };
  const isFormValid = () => {
    const _error = {};
    if (!course.title) _error.title = 'Title is required';
    if (!course.authorId) _error.authorId = 'Author Id is required';
    if (!course.category) _error.category = 'Category is required';

    setError(_error);
    return Object.keys(_error).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(course);
    if (!isFormValid()) {
      return;
    }
    //    courseApi.saveCourse(course).then(() => {
    courseActions.saveCourse(course).then(() => {
      props.history.push('/courses');
      toast.success('Its Saved..!!!');
    });
  };
  return (
    <div className="container">
      <h2>ManageCoursePage</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
        pageErrors={error}
      />
      <Prompt when={true} message="Are you sure ?" />
      {console.log(props)}
    </div>
  );
}

export default ManageCoursePage;
