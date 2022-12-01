const renderTemplate = require('../lib/renderReactModel');

const { Flat } = require('../../db/models');

const FlatView = require('../views/Flat');

const renderFlat = async (req, res) => {
  try {
    const flat = await Flat.findAll({ raw: true });
    const user = req.session.newUser;
    renderTemplate(FlatView, { flat, user }, res);
  } catch (error) {
    console.log('ERROR RENDER FLAT PAGE', error);
  }
};

module.exports = { renderFlat };
