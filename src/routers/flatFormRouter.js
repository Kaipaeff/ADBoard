const express = require('express');

const router = express.Router();

const { renderFlat, postFlat } = require('../controllers/flatFormController');

router.get('/', renderFlat);
router.post('/', postFlat);

module.exports = router;
