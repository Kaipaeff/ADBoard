const router = require('express').Router();

const { renderApart } = require('../controllers/apartControllers');

router.get('/apart', renderApart);

module.exports = router;
