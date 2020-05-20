
import React,{Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../actions"
import Header from "./header";
import Dashboard from "./dashboard";
import Landing from "./landing";
const SurveyNew = () => <h2>Survey</h2>;

class  App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};
}

export default connect(null,actions)(App);
