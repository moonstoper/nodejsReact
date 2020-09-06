import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchsurvey } from "../actions";

class SurveyList extends Component {
  componentDidMount() {
      console.log(new Date());
      const a = Date.now();
      console.log(new Date(Date.now()));
    this.props.fetchsurvey();
  }
  renderSurvey() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div className="uk-card uk-card-default uk-card-body" key={survey._id}>
          <div className="uk-title">
            <h3>{survey.title}</h3>
          </div>
          <p>{survey.body}</p>
          <p className="uk-text-meta uk-margin-remove-top uk-float-right">
            Sent On:&nbsp; 
            <time>
              {new Date(survey.dateSent).toLocaleDateString()}
            </time>
          </p>
          <br />
          <hr className="uk-divider-icon"></hr>

          <div className="uk-link-primary uk-float-left">
            Yes : {survey.yes}
          </div>
          <div className="uk-link-primary uk-float-right">No : {survey.no}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="uk-grid uk-flex-around">{this.renderSurvey()}</div>;
  }
}

function mapStatetoProps({ surveys }) {
  return { surveys };
}

export default connect(mapStatetoProps, { fetchsurvey })(SurveyList);
