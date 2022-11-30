const router = require('express').Router();

const { renderFlat } = require('../controllers/flatControllers');

router.get('/flat', renderFlat);

module.exports = router;
