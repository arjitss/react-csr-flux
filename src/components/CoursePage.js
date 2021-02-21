import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCourses } from '../api/courseApi';
import CourseList from './CourseList';

CoursePage.propTypes = {};

function CoursePage(props) {
  const [coursesData, setCourses] = useState({ courses: [] });
  useEffect(() => {
    getCourses()
      .then((courses) => {
        setCourses({ courses });
      })
      .catch(() => {
        console.log('errrrr');
      });
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <CourseList courses={coursesData.courses} />
    </div>
  );
}

export default CoursePage;
