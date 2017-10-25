import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import FIELDS from "./formFields";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(FIELDS, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
      );
  })
  return(
    <div>
      <h5>Please Review and Confirm Your Entries</h5>
      {reviewFields}
      <button className="btn-flat yellow darken-4 white-text" onClick={onCancel}>Back</button>
      <button className="green btn-flat darken-2 right white-text" onClick={() => submitSurvey(formValues, history)}>
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
    );
};

function mapStateToProps(state){
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));