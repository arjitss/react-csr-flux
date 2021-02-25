import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCourses } from '../api/courseApi';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import courseStore from '../stores/courseStore';
import { loadCourse } from '../actions/courseAction';

CoursePage.propTypes = {};

function CoursePage(props) {
  const [coursesData, setCourses] = useState(courseStore.getCourse());
  useEffect(() => {
    // getCourses()
    //   .then((courses) => {
    //     setCourses({ courses });
    //   })
    //   .catch(() => {
    //     console.log('errrrr');
    //   });
    if (coursesData.length === 0) {
      loadCourse();
    }
    courseStore.addChangeListener(onChange);
    setCourses(courseStore.getCourse());
    return () => {
      courseStore.removeChangeListner(onChange);
    };
  }, [coursesData]);

  function onChange() {
    setCourses(courseStore.getCourse());
  }

  return (
    <div>
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <CourseList courses={coursesData} />
    </div>
  );
}

export default CoursePage;
