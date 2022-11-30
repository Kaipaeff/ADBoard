const renderTemplate = require('../lib/renderReactModule');

const Main = require('../views/Main');

const renderMain = (req, res) => {
  renderTemplate(Main, {}, res);
};

module.exports = { renderMain };
