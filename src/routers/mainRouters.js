const express = require('express');

const router = express.Router();
const renderTemplate = require('../lib/renderReactModule');

const { Flat, House, Apartment } = require('../../db/models');
const Main = require('../views/Main');

router.get('/', async (req, res) => {
  try {
    const flat = await Flat.findAll({ raw: true });
    const house = await House.findAll({ raw: true });
    const apartment = await Apartment.findAll({ raw: true });
    console.log('🚀 ~ house', house);
    renderTemplate(Main, { flat, house, apartment }, res);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
