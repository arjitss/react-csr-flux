import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.REACT_APP_API_URL + '/courses/';

export function getCourses() {
  let baseUrl1 = 'http://localhost:3001/courses/';
  return fetch(baseUrl1).then(handleResponse).catch(handleError);
}

export function getCourseBySlug(slug) {
  let baseUrl1 = 'http://localhost:3001/courses/';
  return fetch(baseUrl1 + '?slug=' + slug)
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok.');
      return response.json().then((courses) => {
        if (courses.length !== 1) throw new Error('Course not found: ' + slug);
        return courses[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveCourse(course) {
  let baseUrl1 = 'http://localhost:3001/courses/';
  return fetch(baseUrl1 + (course.id || ''), {
    method: course.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      ...course,
      // Parse authorId to a number (in case it was sent as a string).
      authorId: parseInt(course.authorId, 10),
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  let baseUrl1 = 'http://localhost:3001/courses/';
  return fetch(baseUrl1 + courseId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
