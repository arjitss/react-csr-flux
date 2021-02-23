import PropTypes from 'prop-types';
import TextInput from './common/TextInput';
CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
};

function CourseForm(props) {
  return (
    <form className="container" onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        name="title"
        onChange={props.onChange}
        value={props.course.title}
        error={props.pageErrors.title}
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
        {props.pageErrors.authorId && (
          <div className="alert alert-danger">{props.pageErrors.authorId}</div>
        )}
      </div>

      <TextInput
        label="Category"
        id="category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.pageErrors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
