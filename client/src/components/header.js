import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Header extends Component {
  renderContent() {
    //console.log(this.props);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <a style={{ textDecoration: "none" }}>Login</a>
            <ul
              className="uk-nav uk-navbar-dropdown uk-navbar-dropdown-nav "
              uk-navbar="mode:click"
            >
              <li>
                <a href="/auth/google" className="uk-inline uk-text-justify">
                  <span
                    className=" uk-margin-small-right"
                    uk-icon="google"
                  ></span>
                  GOOGLE
                </a>
              </li>
              <li>
                <a href="/auth/facebook" className="uk-inline uk-text-justify">
                  <span
                    className=" uk-margin-small-right"
                    uk-icon="facebook"
                  ></span>
                  FACEBOOK
                </a>
              </li>
            </ul>
          </div>
        );

      default:
        return (
          <div>
            <a style={{ textDecoration: "none" }}>User</a>
            <ul
              className="uk-nav uk-navbar-dropdown uk-navbar-dropdown-nav "
              uk-navbar="mode:hover"
            >
              <li>
                <a href="/api/logout" className="uk-inline uk-text-justify">
                  <span className=" uk-margin-small-right"></span>
                  Logout
                </a>
              </li>
              <li>
                <a href="/settings" className="uk-inline uk-text-justify">
                  <span className=" uk-margin-small-right"></span>
                  Settings
                </a>
              </li>
            </ul>
          </div>
        );
    }
  }

  render() {
    //console.log(this.props);
    return (
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive:uk-navbar-transparent;top:200">
        <nav
          className="uk-navbar-primary uk-margin uk-background-primary uk-light uk-text-default"
          uk-navbar="mode: hover"
        >
          <div className="uk-navbar-left uk-navbar-nav uk-active">
            <Link to={this.props.auth?"/surveys":"/"}
              className="uk-nav uk-margin-left uk-logo uk-text-emphasis"
            >
              
                <img
                  src="love.svg"
                  alt="LOGO"
                  height="40"
                  width="40"
                  className=" uk-animation-stroke uk-margin-small-right" uk-svg="uk-animation:true"

                ></img>

              mailBOSS
            </Link>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li className="uk-active ">
                <a>Credit</a>
              </li>
              <li
                className="uk-active uk-margin-large-right"
                style={{ textDecoration: "none" }}
              >
                <a style={{ textDecoration: "none" }}>{this.renderContent()}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps({auth}) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
