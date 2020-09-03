import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
//Field class is used for rendering any type of traditional html contenet
import SurveyField from "./SurveyField";
import _ from "lodash";
import { Link } from "react-router-dom";
import ValidEmails from "../utils/validateEmail"
const reduxField = [
  { label: "Survey Title", name: "title" },
  { label: "Survey Subject", name: "subject" },
  { label: "Body", name: "body" },
  { label: "Recipients", name: "email" },
];
class SurveyForm extends Component {
  renderFields() {
    return _.map(reduxField, ({ label, name }) => {
      return (
        <Field
          component={SurveyField}
          type="Text"
          label={label}
          name={name}
          key={name}
        />
      );
    });
  }
  
  render() {
    return (
      <div className="container uk-flex uk-flex-center">
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
          className="uk-grid-small"
        >
          {this.renderFields()}
          <Link to="/surveys" className="uk-button uk-button-danger uk-margin-large uk-align-left">
          <span className="uk-margin-small-right" uk-icon="icon: close"></span>
          Cancel
          </Link>
          <button
            type="submit"
            className="uk-button uk-button-primary uk-margin-large uk-align-right"
          >
            Next
            <span className="uk-margin-small-left" uk-icon="icon: check"></span>
          </button>
        </form>
      </div>
    );
  }


}
function validate(values) {
    const error = {};
    error.email = ValidEmails(values.email || '');    
    _.each(reduxField,({name})=>{
        if(!values[name])
            error[name] = "Error!";
    })    
    return error;
}
export default reduxForm({
    validate,
  form: "surveyForm"
})(SurveyForm);
