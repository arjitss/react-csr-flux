import PropTypes from 'prop-types';
import TextInput from './common/TextInput';
CourseForm.propTypes = {};

function CourseForm(props) {
  return (
    <form className="container">
      <TextInput
        id="title"
        label="Title"
        name="title"
        onChange={props.onChange}
        value={props.course.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId != null ? props.course.authorId : ''}
            className="form-control"
            onChange={props.onChange}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>

      <TextInput
        label="Category"
        id="category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
