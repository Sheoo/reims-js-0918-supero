import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const SendPlace = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="address"
        type="text"
        component={renderField}
        label="Adresse"
      />
      <Field name="city" type="text" component={renderField} label="Ville" />
      <Field
        name="start_time"
        type="text"
        component={renderField}
        label="heure début"
      />
      <Field
        name="duration"
        type="text"
        component={renderField}
        label="durée"
      />
      <Field
        name="participants"
        type="text"
        component={renderField}
        label="Limite participants"
      />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "addactivity", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendPlace);
