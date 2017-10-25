import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import emailValidator from "../../utils/emailValidator";
import FIELDS from "./formFields";

class SurveyForm extends Component {
  renderFields(){
    return _.map(FIELDS, ({ label, name }) => {
      return (<Field key={name} component={SurveyField} type="text" name={name} label={label} />);
    });
  }
  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red white-text btn-flat">Cancel</Link>
          <button type="submit" className="teal white-text btn-flat right">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
      );
  }
}

function validate(values){
  const errors = {};
  errors.recipients = emailValidator(values.recipients || "");
  _.each(FIELDS, ({ name, label }) => {
    if(!values[name]){
      errors[name] = `${label} is Required`;
    }
  });
  return errors;
}

export default reduxForm({
    validate,
    form: "surveyForm",
    destroyOnUnmount: false
})(SurveyForm);