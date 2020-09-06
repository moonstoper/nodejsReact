import React from "react";
import {Link} from "react-router-dom";
import SurveyList from "../surveys/SurveyList";
const Dashboard = () => {
  return (
    <div>
      <div className="uk-container">
      <div className="uk-float-left uk-text-primary uk-text-lead uk-text-bold">Dashboard</div>
        <div className="uk-float-right ">
          Add Surveys
          <Link to ="/surveys/new"><button
            className="uk-button uk-button-danger   uk-margin-large-left uk-card-primary"
            uk-icon="icon:plus"
          ></button></Link>
          </div>
          </div>
          
      <br />
      <SurveyList/>
      
        
      </div>
    
  );
};

export default Dashboard;
