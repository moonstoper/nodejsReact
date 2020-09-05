import React from "react";
import { connect } from "react-redux";
import REDUXFIELD from "./formfields";
import _ from "lodash";
import * as actions from "../actions/index";
import { withRouter } from "react-router-dom";

const SurveyReview = ({ onCancel, formValues, submitSurvey,history }) => {
  const reviewField = _.map(REDUXFIELD, ({ name, label }) => {
    return (
      <div className="uk-margin-small">
        <label className="uk-alert-primary">{label}</label>
        <div className="uk-alert-secondary">{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="uk-container">
      <div className="uk-section-small uk-heading-medium">
        Confirm your Form
      </div>
      <form className="uk-grid-small uk-section">{reviewField}</form>
      <div className="uk-float-left">
        <button className="uk-button uk-alert-danger" onClick={onCancel}>
          Back
        </button>
      </div>
      <button
        className="uk-float-right uk-button uk-alert-primary"
        onClick={() => submitSurvey(formValues,history)}
      >
        Send Survey <span uk-icon="icon:mail"></span>
      </button>
    </div>
  );
};

function mapStatetoProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStatetoProps, actions)(withRouter(SurveyReview));
