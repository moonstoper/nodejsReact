import React from "react";
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} className="uk-input uk-margin "/>
      {/*displaying error if no error */}
      <div className="uk-text-danger uk-margin-bottom-large">
          {touched && error}
        </div>
    </div>
  );
};
