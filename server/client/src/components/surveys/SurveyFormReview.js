import _ from "lodash";
import React from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";

import formFields from "./formFields";
import * as actions from "../../actions"

const SurveyFormReview = ({ onCancel,formValues,submitSurvey,history }) => {
    const reviewFields=_.map(formFields,({name,label})=>{
        return(
            <div key={name}>
            <h5 className="header">{label}</h5>
            <div className="card horizontal">
                <div className="card-content">
                    <p>{formValues[name]}</p>
                </div>
            </div>
            </div>
        )
    })

  return (
    <div>
      <h2 className="header" >Please Review your Form</h2>
      {reviewFields}
      <button className="yellow darken-2 btn-flat white-text" onClick={onCancel}>Cancel</button>
      <button onClick={()=>submitSurvey(formValues,history)} className="green btn-flat right white-text">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};
function mapStateToProps(state){
    return{
        formValues:state.form.surveyForm.values
}}
export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));
