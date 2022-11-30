const renderTemplate = require("../lib/renderReactModel");
const Home = require("../views/Home");

const renderHome = (req, res) => {
  const newUser = req.session?.newUser;
  renderTemplate(Home, { newUser }, res);
};

module.exports = { renderHome };
