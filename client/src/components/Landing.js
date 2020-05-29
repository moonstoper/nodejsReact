import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="uk-section-large">
        <p className="uk-container uk-heading-xlarge landing uk-text-center">
          Mailfy
        </p>
      </div>
      <div className="uk-section-large">
        <div className="uk-container uk-flex uk-flex-center  uk-padding uk-margin-medium-top uk-margin-xlarge-bottom">
          <div
            className="uk-grid uk-grid-divider  uk-child-width-1-1@s uk-child-width-1-2@s summary uk-text-secondary"
            uk-grid>
            <div className="summaryf">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="summaryl">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section-large">
        <div className="uk-container conatinerMar uk-child-width-1-4@m uk-child-width-1-2@s uk-flex uk-flex-row uk-padding ">
          <div
            className="uk-card uk-card-default uk-margin-auto  "
            uk-scrollspy="cls: uk-animation-slide-left; repeat:true"
          >
            <div className="uk-card-body uk-card-hover">
              <p className="uk-card-title">Loren ipsum</p>
              <p>Crazy fox jump over the lazy dog</p>
            </div>
          </div>
          <div
            className="uk-card uk-card-default uk-margin-auto  "
            uk-scrollspy="cls: uk-animation-slide-top; repeat:true"
          >
            <div className="uk-card-body uk-card-hover">
              <p className="uk-card-title">Loren ipsum</p>
              <p>All guys landed on the moon safely</p>
            </div>
          </div>
        </div>
        <div className="uk-container conatinerMar uk-child-width-1-4@m uk-child-width-1-2@s uk-flex uk-flex-row uk-padding">
          <div
            className="uk-card uk-card-default uk-margin-auto  "
            uk-scrollspy="cls: uk-animation-slide-bottom; repeat:true"
          >
            <div className="uk-card-body uk-card-hover">
              <p className="uk-card-title">Loren ipsum</p>
              <p>Crazy fox jump over the lazy dog</p>
            </div>
          </div>
          <div
            className="uk-card uk-card-default uk-margin-auto "
            uk-scrollspy="cls: uk-animation-slide-right; repeat: true"
          >
            <div className="uk-card-body uk-card-hover">
              <p className="uk-card-title">Loren ipsum</p>
              <p>All guys landed on the moon safely</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
