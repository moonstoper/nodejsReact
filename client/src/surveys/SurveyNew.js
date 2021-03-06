import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import { reduxForm } from "redux-form";
import SurveyReview from "./SurveyFormReview";
class SurveyNew extends Component {
  state = { showFormReview: false };
  renderContent() {
    if (this.state.showFormReview)
      return (
        <SurveyReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    else
      return (
        <SurveyForm
          onSurveySubmit={() => this.setState({ showFormReview: true })}
        />
      );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
