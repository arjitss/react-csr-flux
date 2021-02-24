import { EventEmitter } from 'events';
import Dispatcher from '../appDispatcher';
import actionType from '../actions/actionsTypes';

let _course = [];
const CHANGE_EVENT = 'chnage';
class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListner(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  getCourse() {
    return _course;
  }
  getCourseBySlug(slug) {
    return _course.find((course) => course.slug === slug);
  }
}

const store = new CourseStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionType.CREATE_COURSE:
      _course.push(action.course);
      store.emitChange(); // This will let all the components know that there is a chnage in state
      break;
    default:
  }
});
export default store;
