import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import Payments from "./Payment"
class Header extends Component {
  renderContent() {
    //console.log(this.props);
    //using switch to switch different according to state
    switch (this.props.auth) {
      case null:
        return <div uk-spinner></div>;
      case false:
        return (
          <ul className="uk-navbar-nav">
            <li>
              <a className="uk-active uk-margin-large-right uk-text-emphasis uk-button uk-button-text">
                Login
              </a>
              <div
                className="uk-navbar-dropdown uk-margin-large-right"
                uk-dropdown="pos:bottom-right"
              >
                <ul className="uk-nav uk-navbar-dropdown-nav ">
                  <li>
                    <a href="/auth/google">
                      <span uk-icon="google"></span> GOOGLE
                    </a>
                  </li>
                  <li>
                    <a href="/auth/facebook">
                      <span uk-icon="facebook"></span> FACEBOOK
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        );

      default:
        return (
          <ul className="uk-navbar-nav">
            <li className="uk-active uk-text-emphasis uk-button uk-button-text">
              <a>
                Credits
                {" : " + this.props.auth.credits + "  "}
              </a>
            </li>
            <li>
              <a className="uk-active uk-text-emphasis uk-margin-large-right uk-button uk-button-text">
                User
              </a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <a href="/api/logout">LOGOUT</a>
                  </li>
                  <li>
                    <a href="#">SETTINGS</a>
                  </li>
                  <p>----------</p>
                  <li>
                    <a href="/addcredits">PAYMENTS</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        );
    }
  }

  render() {
    //console.log(this.props);
    //header which will be render 
    return (
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive:uk-navbar-transparent;top:200">
        <nav
          className="uk-navbar-primary uk-margin uk-background-primary uk-light uk-text-default uk-padding-large-bottom"
          uk-navbar="mode: hover"
        >
          <div className="uk-navbar-left uk-navbar-nav uk-active">
            <Link 
              to={this.props.auth ? "/surveys" : "/"}
              className="uk-nav uk-margin-left uk-logo uk-text-emphasis"
            >
              <img
                src="love.svg"
                alt="LOGO"
                height="40"
                width="40"
                className=" uk-animation-stroke uk-margin-small-right"
                uk-svg="uk-animation:true"
              ></img>
              Mailfy
            </Link>
          </div>
          <div className="uk-navbar-right">{this.renderContent()}</div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
