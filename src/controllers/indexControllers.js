const renderTemplate = require('../lib/renderReactModel');

const Main = require('../views/Main');

const renderMain = (req, res) => {
  renderTemplate(Main, {}, res);
};

module.exports = { renderMain };
