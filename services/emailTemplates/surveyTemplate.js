const keys = require("../../config/keys");

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd Like <strong><u>YOUR<u></strong> Input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.sendGridRedirect}/api/survey/${survey.id}/yes">YES</a>
          </div>
          <div>
            <a href="${keys.sendGridRedirect}/api/survey/${survey.id}/no">NO</a>
          </div>
        </div>
      </body>
    </html>
  `
}