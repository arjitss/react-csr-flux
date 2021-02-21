import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
          <td>
            <Link to={'/course/' + course.slug}>{course.title}</Link>
          </td>
          <td>
            <Link to={'/course/' + course.slug}>{course.authorId}</Link>
          </td>
          <td>
            <Link to={'/course/' + course.slug}>{course.category}</Link>
          </td>
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

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author Id</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <GetCourseData2 courseArray={props.courses} />
      </tbody>
      <tbody style={{ border: '5px solid #ccc', backgroundColor: 'pink' }}>
        {props.courses.map((course) => {
          return GetCourseData1(course);
        })}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
