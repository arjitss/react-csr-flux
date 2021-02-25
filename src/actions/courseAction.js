import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionsTypes';
export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    debugger;
    if (course.id) {
      debugger;
      dispatcher.dispatch({
        actionType: actionTypes.EDIT_COURSE,
        course: savedCourse,
      });
    } else {
      dispatcher.dispatch({
        actionType: actionTypes.CREATE_COURSE,
        course: savedCourse,
      });
    }
  });
}

export function loadCourse() {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      course: courses,
    });
  });
}
