import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions/";

class Payment extends Component {
  render() {
    //console.log(location.pathname);
    // var x=location.pathname;
    // switch(x)
    // {case "/addcredit" :

    return (
      <div className="uk-container">
        <div className="uk-heading-medium uk-text-center uk-text-light">
          Choose your Plan
        </div>
        <div className="uk-flex">
          <div className="uk-flex-center uk-grid uk-grid-small uk-child-width-1-3@m  uk-child-width-1-2@s uk-grid-match">
            <div className="uk-card uk-card-default uk-card-body uk-text-center uk-margin-auto">
              <p className=" uk-text-large uk-card-header ">Regular Payment</p>
              <p>You get 5 credits</p>
              <p>1 credit/mail</p>
              <p>No hidden charges</p>
              <p>No autocharge or subscription</p>
              <hr className="uk-divider-icon" />
              <StripeCheckout
                name="Mailfy"
                description="5 emails for 5$"
                amount={500}
                token={(token) => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                billingAddress=""
              >
                <button className="uk-button uk-button-primary   uk-margin-bottom">
                  Buy Credit
                </button>
              </StripeCheckout>
            </div>
            <div className="uk-card uk-card-default uk-card-body uk-text-center uk-margin-auto">
              <p className=" uk-text-large uk-card-header ">Essential Payment</p>
              <p>You get 10 credits</p>
              <p>1 credit/mail</p>
              <p>No hidden charges</p>
              <p>No autocharge or subscription</p>
              <hr className="uk-divider-icon" />
              <StripeCheckout
                name="Mailfy"
                description="10 emails for 10$"
                amount={1000}
                token={(token) => this.props.handleTokenv2(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                billingAddress=""
              >
                <button className="uk-button uk-button-primary   uk-margin-bottom">
                  Buy Credit
                </button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
    );

    //default: return;
  }
}
//};

export default connect(null, actions)(Payment);
