const keys = require("../../config/keys");
module.exports = (survey) => {
  return `<html>
  <body>
  <h3>Hello There!</h3>
 <p>${survey.body}</p>
 <div>
 <a href="${keys.mailredirectDomain}/api/surveys/${survey.id}/yes">YES</a>
 <a href="${keys.mailredirectDomain}/api/surveys/${survey.id}/no">NO</a>
 <div>
 </body>
 </html>`;
};
