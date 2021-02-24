import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionsTypes';
export function saveCourse() {
  return courseApi.saveCourse().then((savedCourse) => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: saveCourse,
    });
  });
}
