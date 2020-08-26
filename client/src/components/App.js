import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit";
import "uikit/dist/js/uikit-icons.min.js";
import React,{Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../actions"
import Header from "./Header";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import Plans from "./Plans"
import Loading from "./Loading"
const SurveyNew = () => <h2>Survey</h2>;

class  App extends Component {
  state={
    loading:true
  };
  componentDidMount(){
    this.props.fetchUser();
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  render(){
    const {loading} =this.state.loading; //change here
    if(loading){
      return(
        <div>
          <Loading />
        </div>
      );
    }
    else{
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          
          <Route exact path="/" component={Landing} />
         
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
          <Route exact path="/addcredits" component={Plans} />
        </div>
      </BrowserRouter>
    </div>
  );
    }
};
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}


export default connect(null,actions)(App);
