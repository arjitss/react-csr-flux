import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCourses } from '../api/courseApi';

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

  /** Two ways to display data in react
   * 1. Calling a method on each map elemet - GetCourseData1
   * 2. Calling a JSX component and passing data as props- GetCourseData2
   */
  const GetCourseData1 = (course) => {
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  };

  const GetCourseData2 = (props) => {
    console.log(props.courseArray.length);
    if (props.courseArray.length > 0) {
      return props.courseArray.map((course) => {
        return (
          <tr key={course.id}>
            <td>{course.title}</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td>Waiting for data...!!!</td>
        </tr>
      );
    }
  };
  return (
    <div>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author Id</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <GetCourseData2 courseArray={coursesData.courses} />
        </tbody>
        <tbody style={{ border: '5px solid #ccc', backgroundColor: 'pink' }}>
          {coursesData.courses.map((course) => {
            return GetCourseData1(course);
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CoursePage;