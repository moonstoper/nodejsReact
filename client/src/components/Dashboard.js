import React from "react";
import {Link} from "react-router-dom"
const Dashboard = () => {
  return (
    <div>
      <div className="uk-text-center uk-text-large uk-text-lead">Dashboard</div>
      <br />
      <div className="uk-flex uk-flex-center">
        <div className=" uk-padding-large ">
          Like to add more surveys!
          <Link to ="/surveys/new"><button
            className="uk-button uk-button-danger   uk-margin-large-left"
            uk-icon="icon:plus"
          ></button></Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
