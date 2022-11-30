const renderTemplate = require('../lib/renderReactModel');

const { Apartment } = require('../../db/models');

const { Apart } = require('../views/Apart');

const renderApart = async (req, res) => {
  const apart = await Apartment.findAll({ raw: true });
  const user = req.session.newUser;
  renderTemplate(Apart, { apart, user }, res);
};

module.exports = { renderApart };
