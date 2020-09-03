import React from "react";
const SurveyReview = ({onCancel}) => {
   
    return(
    <div className="uk-container uk-flex uk-flex-center">
    
    <h3 className="uk-background-blend-hue">  Confirm the form
    </h3>
     <br/>
     <div>
      <button className="uk-button uk-alert-warning" onClick={onCancel} >Back</button>
      </div>
    </div>
  );
};

export default SurveyReview;
