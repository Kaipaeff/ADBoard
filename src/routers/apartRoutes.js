const router = require('express').Router();

const { renderApart } = require('../controllers/apartControllers');

router.get('/', renderApart);

module.exports = router;
